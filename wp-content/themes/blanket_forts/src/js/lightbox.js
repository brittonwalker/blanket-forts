/**
 * LightBox.js
 */

import SimpleLightbox from 'simple-lightbox';

export class LightBox {
 
	constructor() {

		const options = {
			elements: '.grid-item a',
			closeBtnClass: 'lightbox__close'
		}

		new SimpleLightbox(options);
		
	}
  
}