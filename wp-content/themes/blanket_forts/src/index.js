import './css/index.scss';

import { Videos } from './js/videos';
import { GridVideo } from './js/GridVideo';
import { preloadImages } from './js/utils';
import { TextLinesReveal } from './js/TextLinesReveal';
import { Menu } from './js/Menu';
import { CopyLink } from './js/CopyLink';

// DOM elements:
let DOM = {
    images: document.querySelectorAll('.grid-item')
};

// text content elements
DOM.textContent = {
    heading: document.querySelector('.homepage-text'),
    // primary: document.querySelector('.content-primary'),
    // secondary: document.querySelector('.content-secondary')
};

// DOM.images.forEach(element => {
// 	let image = new ImgReveal(element);	
// 	return image;
// });
 
// show the initial texts and images
const showContent = () => {

	// text lines reveal obj
	let isHome = false;
	let textLinesReveal;
	if (document.body.classList.contains('home')) {
		isHome = true;
		textLinesReveal = new TextLinesReveal([DOM.textContent.heading]);
	}

	// show texts (slide in)
	if (isHome) {
		textLinesReveal.in();
	}
	new Videos();
	new GridVideo([...document.querySelectorAll('.grid-video')]);
	new Menu();
	new CopyLink();
};

// Preload images
preloadImages('.grid__img').then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    // show content
    showContent();
});