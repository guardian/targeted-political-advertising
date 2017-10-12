import ejs from 'ejs'
import cheerio from 'cheerio'
import mainHTML from './../text/main.html!text'

export class Politico {

	constructor(el, data) {

		var self = this

		this.database = data.ads

        this.database.forEach(function(item) {

            (item['targeting']) ? item['targeting'] = self.cleanTargeting(item['targeting'], item['title']) : ''

        })

		this.element = el

		this.element.innerHTML = ejs.render(mainHTML, { database: this.database });
		
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