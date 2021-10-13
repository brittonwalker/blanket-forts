/**
 * Boilerplate.js
 */

import Plyr from 'plyr';

export class Videos {
 
	constructor() {

		this.videos = document.querySelectorAll('.plyr__video-embed');

		this.videos.forEach(element => {
			new Plyr(element, {
				hideControls: true,
				clickToPlay: false,
			});
		});
		
	}
  
}
