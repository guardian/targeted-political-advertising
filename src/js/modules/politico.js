import ejs from 'ejs'
import cheerio from 'cheerio'
import mainHTML from './../text/main.html!text'
import searchHTML from './../text/search.html!text'
import socialHTML from './../text/social.html!text'
import jQuery from './../lib/jquery'
import Mark from 'mark.js'
import reqwest from 'reqwest'
import Clipboard from 'clipboard'

export class Politico {

	constructor(el, data) {

		var self = this

		this.database = data.ads

		this.page = 0

		this.searchtype = 0

        this.database.forEach(function(item) {

            (item['targeting']) ? item['targeting'] = self.cleanTargeting(item['targeting'], item['title']) : '' ;

            (item['html']) ? item['link'] = self.cleanHTML(item['html']) : item['link'] = null;

        })

		this.element = el

		this.element.innerHTML = ejs.render(mainHTML, { database: this.database });

		this.context = document.getElementById("politico-advertising");
		
		this.instance = new Mark(self.context);

		this.searchbox()

		this.scroller()

		this.social()

		this.getParams()
		
	}

    scroller() {

    	var self = this

        $(window).on('scroll', function(){
            jQuery('.infinity').each(function(){
                if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.9 && $(this).hasClass('infinity') ) {
                    $(this).removeClass('infinity');
                    console.log("Load the next 20 page")
                    self.nextbunch()
                }
            });
        });
    }

    nextbunch() {

    	var self = this

    	self.page = self.page + 1

    	self.searchtype = self.page

		reqwest({
		  	url: 'https://projects.propublica.org/facebook-ads/ads?page=' + self.page,
		  	type: 'json',
			headers: {
				'Accept-Language': 'en-AU;q=1.0'
			},
		  	crossOrigin: true,
		  	success: (resp) =>  { 
		  		console.log(resp.ads.length)
		  		if (resp.ads.length > 0) {
			  		self.query = resp.ads
			  		self.nextprocess()

		  		}
		  	}
		});

    }

    nextprocess() {

    	var self = this

        this.query.forEach(function(item) {

            (item['targeting']) ? item['targeting'] = self.cleanTargeting(item['targeting'], item['title']) : '' ;

            (item['html']) ? item['link'] = self.cleanHTML(item['html']) : item['link'] = null;

        })

        this.database.push(...this.query)

        var html = ejs.render(searchHTML, { database: self.query })

		jQuery("#politico-advertising").append(html);

		self.social()


    }

    cleanHTML(html) {

		var self = this

	    let $ = cheerio.load(html, { normalizeWhitespace: true });

		var links = $('a');

		var urls = []

		$(links).each(function(i, link){

			let url = $(link).attr('href')
			if (url && url.indexOf('https://www.facebook.com/') !== -1) {
				urls.push(url)
			}
			
		});

		return (urls.length > 0) ? urls[0] : null ;

    }

	cleanTargeting(html, avertiser) {

		var self = this

	    let $ = cheerio.load(html, { normalizeWhitespace: true });

		let reason = "<strong>Why is <span> " + avertiser + " </span> targeting you?</strong>"

		let arr = ["thanks for your rating.", "learn more about facebook adverts"]; // Array of features we want to keep out

		// Remove all links
		$('a').each(function() {

			$(this).remove()
		    
		});

		// Select all spans not on the no-fly-list
		$('span').each(function() {

			if (!self.contains(arr, $(this).text().toLowerCase())) {   			

				reason += '<p>' + $(this).html() + '</p>' ;	
				
			}
		    
		});

		return reason

	}

	contains(a, b) {
	    // array matches
	    if (Array.isArray(b)) {
	        return b.some(x => a.indexOf(x) > -1);
	    }
	    // string match
	    return a.indexOf(b) > -1;
	}

	searchbox() {

		var self =  this

		this.instance.unmark();

		document.getElementById("political-search").addEventListener("click", function() {

			var input = document.getElementById("inputbox").value;

	        if (input && input.length > 2) {

	        	$("#political-message").html("");

	        	self.searchapi(input)

	        }

		});

	    jQuery('#inputbox').bind("input", function(event) {

	    	var input = $(this).val()

	        if (input.length < 2) {

	        	self.searchtype = self.page

				self.query = self.database

				self.datablaster()

	        }

	    });

		$('input').keydown( function( event ) {

		    if ( event.which === 13 ) {

				var input = document.getElementById("inputbox").value;

		        if (input && input.length > 2) {

		        	$("#political-message").html("");

		        	self.searchapi(input)

		        }

		        event.preventDefault();
		        return false;
		    }
		});

    
	}

	searchapi(input) {

		var self = this

		reqwest({
		  	url: 'https://projects.propublica.org/facebook-ads/ads?search=' + input,
		  	type: 'json',
			headers: {
				'Accept-Language': 'en-AU;q=1.0'
			},
		  	crossOrigin: true,
		  	success: (resp) =>  { 

		  		console.log(resp)

		  		if (resp.ads.length > 0) {

			  		self.query = resp.ads

			  		self.searchtype = input

			        self.query.forEach(function(item) {

			            (item['targeting']) ? item['targeting'] = self.cleanTargeting(item['targeting'], item['title']) : '' ;

			            (item['html']) ? item['link'] = self.cleanHTML(item['html']) : item['link'] = null;

			        })

			  		self.datablaster(input)

		  			$("#political-message").html(resp.ads.length + " adverts matched your search");
		  			setTimeout(function(){ $("#political-message").html(""); }, 1500);


		  		} else {
		  			$("#political-message").html("Your search returned no results");
		  			setTimeout(function(){ $("#political-message").html(""); }, 1500);

		  		}

		  	}
		});

	}

	getParams() {

		var self = this

		var urlParams; 
		var params = {};

		urlParams = window.location.search.substring(1).split('&');

		urlParams.forEach(function(param){
		 
		    if (param.indexOf('=') === -1) {
		        params[param.trim()] = true;
		    } else {
		        var pair = param.split('=');
		        params[ pair[0] ] = pair[1];
		    }
		    
		});

		// X is the id of the advert
		// Y specifies the page number
		// Z specified if a page number or search term
		if ($.isNumeric(params.x) && $.isNumeric(params.y) && params.z) {
			// Load the add that was shared at the begining of the feed
			var q;
			if ($.isNumeric(params.z)) {
				q = 'page=' + params.y
			} else {
				q = 'search=' + decodeURIComponent(params.z)
			}
			self.socialapi(q,params.x)
		}
    
	}

	socialapi(query,id) {

		var self = this

		reqwest({
		  	url: 'https://projects.propublica.org/facebook-ads/ads?' + query,
		  	type: 'json',
			headers: {
				'Accept-Language': 'en-AU;q=1.0'
			},
		  	crossOrigin: true,
		  	success: (resp) =>  { 

		  		if (resp.ads.length > 0) {

			  		var datum = resp.ads

			        datum.forEach(function(item) {

			            (item['targeting']) ? item['targeting'] = self.cleanTargeting(item['targeting'], item['title']) : '' ;

			            (item['html']) ? item['link'] = self.cleanHTML(item['html']) : item['link'] = null;

			        })

			        datum = datum.filter(function( obj ) {return obj.id == id });

			        if (datum.length > 0) {
			        	var html = '<div class="social-outcast">' + ejs.render(socialHTML, { database: datum }) + '</div>';
			        	$("#politico-advertising").prepend(html)
			        }


		  		}

		  	}

		});

	}

	datablaster(input=null) {

	    document.getElementById("politico-advertising").innerHTML = ejs.render(searchHTML, { database: this.query });

	    this.social()

	    if (input!=null) {
	    	this.markit(input)
	    }

	}

	markit(keyword) {

		this.instance.mark(keyword);

	}

	getShareUrl() { 

		var isInIframe = (parent !== window);
		var parentUrl = null;
		var shareUrl = (isInIframe) ? document.referrer : window.location.href;
		shareUrl = shareUrl.split('?')[0]
		return shareUrl;

	}

	social() {

		var self = this

	    jQuery(".political-facebook").unbind();
	    jQuery(".political-twitter").unbind();

	    var y, z;

	    var message = "Political advertising on Facebook";

	    (function() {
	        jQuery(".political-facebook").click(function() {

	        	var pagelink = self.getShareUrl();

	        	var id = $(this).data('id');

	        	var title = $(this).data('title');

			    if ($.isNumeric(self.searchtype)) {

			    	y = 0;
					z = encodeURI(title)

			    } else {

			    	y = 0
			    	z = encodeURI(self.searchtype)
			    }

	            var title = "Political advertising on Facebook";
	            message = self.createSocial(id);
	            pagelink += '?x=' + id + '&y=' + y + '&z=' + z

	            var params = {
	                method: 'feed',
	                link: pagelink,
	                name: title,
	                description:  message
	            };
	            //console.log(params);
	            FB.ui(params, function(response) {});
	        });
	    })();

	    jQuery(".political-twitter").click(function() {

	    	var id = $(this).data('id');

        	var title = $(this).data('title');

	    	var pagelink = self.getShareUrl();

		    if ($.isNumeric(self.searchtype)) {

		    	y = 0;
				z = encodeURI(title)

		    } else {

		    	y = 0
		    	z = encodeURI(self.searchtype)
		    }

		    pagelink += '?x=' + id + '&y=' + y + '&z=' + z;

	        message = self.createSocial(id);

	        if ((message.length + pagelink.link + 12) > 140) {
	            message = "Political advertising on Facebook";
	        }

	        var twitter_results = 'https://twitter.com/intent/tweet?url='+ encodeURIComponent(pagelink) + '&text=' + encodeURI(message);
	        
	        window.open(twitter_results, '_blank');
	    });

		new Clipboard('.political-link', {
		    text: function(trigger) {

		    	var id = trigger.getAttribute('data-id')

		    	var title = trigger.getAttribute('data-title')

		    	var pagelink = self.getShareUrl();

			    if ($.isNumeric(self.searchtype)) {

			    	y = 0;
					z = encodeURI(title)

			    } else {

			    	y = 0
			    	z = encodeURI(self.searchtype)
			    }

			    pagelink += '?x=' + id + '&y=' + y + '&z=' + z;

		        return pagelink
		    }
		});
	}

	createSocial(id) {

	    var message = 'Political advertising on Facebook';

	    var result = this.database.filter(function( obj ) {return obj.id == id });

	    if (result.length) {

	        message += ': ' + result[0].title + ".";

	    }

	    return message

	}

}

/*
created_at
html
id
images
impressions
lang
message
not_political
political
political_probability
targeting
thumbnail
title
updated_at
*/
