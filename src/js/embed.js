import iframeMessenger from 'guardian/iframe-messenger'
import reqwest from 'reqwest'
import { Politico } from './modules/politico'

window.init = function init(el, config) {

    iframeMessenger.enableAutoResize();

	reqwest({
	  	url: 'https://projects.propublica.org/facebook-ads/ads',
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