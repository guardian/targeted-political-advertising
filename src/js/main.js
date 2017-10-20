import reqwest from 'reqwest'
import { Politico } from './modules/politico'

export function init(el, context, config, mediator) {

	window.fbAsyncInit = function() {
	    FB.init({
	        appId: '741666719251986',
	        xfbml: true,
	        version: 'v2.1'
	    });
	};
	(function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {
	        return;
	    }
	    js = d.createElement(s);
	    js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	reqwest({
	  	url: 'https://projects.propublica.org/facebook-ads/ads?page=0',
	  	type: 'json',
		headers: {
			'Accept-Language': 'en-AU;q=1.0'
		},
	  	crossOrigin: true,
	  	success: (resp) =>  { 
	  		let politico = new Politico(el, resp)
	  	}
	});
    
}