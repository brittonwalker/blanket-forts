/**
 * LightBox.js
 */

import SimpleLightbox from 'simple-lightbox';

export class LightBox {
 
	constructor() {

		console.log('hello')

		const options = {
			elements: '.grid-item a',
			closeBtnClass: 'lightbox__close'
		}

		new SimpleLightbox(options);
		
	}
  
}