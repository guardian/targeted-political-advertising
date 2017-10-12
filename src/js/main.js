import reqwest from 'reqwest'
import { Politico } from './modules/politico'

export function init(el, context, config, mediator) {

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