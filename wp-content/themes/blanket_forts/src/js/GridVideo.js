/**
 * GridVideo.js
 */

import Plyr from 'plyr';

export class GridVideo {
	constructor(elements) {

		if (!elements.length) return;

		this.index;

		this.DOM = {
            els: Array.isArray(elements) ? elements : [elements],
			grid: [...document.querySelectorAll('#video-grid > li')],
			modal: document.getElementById('video-modal'),
        };

		this.DOM.content =this.DOM.modal.querySelector('.video-modal__content')
		this.DOM.close = this.DOM.modal.querySelector('.video-modal__close')
		this.DOM.caption = this.DOM.modal.querySelector('.video-modal__caption')
		this.DOM.title = this.DOM.modal.querySelector('.video-modal__title')
		this.DOM.next = this.DOM.modal.querySelector('.video-modal__next')
		this.DOM.prev = this.DOM.modal.querySelector('.video-modal__prev');

		this.bindEvents();

	}

	bindEvents() {
		this.DOM.els.map(el => {
			el.addEventListener('click', () => this.addToModal(el))
		})

		this.DOM.close.addEventListener('click', (evt) => this.close(evt) );
		this.DOM.next.addEventListener('click', () => this.next() );
		this.DOM.prev.addEventListener('click', () => this.prev() );
		document.addEventListener('mouseup', (evt) => this.close(evt) );
		document.addEventListener('keyup', (evt) => this.logKey(evt) );
	}

	logKey(evt) {
		if (evt.code === 'Escape') {
			this.close(evt);
		}
		if (evt.code === 'ArrowLeft') {
			this.prev();
		}
		if (evt.code === 'ArrowRight') {
			this.next();
		}
	}

	close(evt) {
		if (evt.target.closest('.video-modal__content') || evt.target.closest(".video-modal__footer") || evt.target.matches(".video-modal__footer") ) return;

		this.DOM.modal.classList.remove('active');
		this.DOM.content.innerHTML = null;		
	}

	addToModal(target) {
		if (this.DOM.modal.classList.contains('active')) {
			return;
		}

		// Set index and make html for video content
		this.index = this.DOM.els.indexOf(target);
		const video = makeHTML(target.dataset.videoSrc);

		// Update content in modal
		this.DOM.content.innerHTML = video;
		this.DOM.caption.innerText = `${this.index + 1} / ${this.DOM.els.length}`;
		this.DOM.title.innerText = `${this.DOM.els[this.index].dataset.videoTitle}`;

		// Make it a Plyr object and activate modal
		new Plyr(this.DOM.content.firstChild).play();
		this.DOM.modal.classList.add('active');
	}

	next() {
		// Set index and make html for video content
		this.index === this.DOM.els.length - 1 ? this.index = 0 : this.index = this.index + 1;
		const video = makeHTML(this.DOM.els[this.index].dataset.videoSrc);

		// Update content in modal
		this.DOM.content.innerHTML = video;
		this.DOM.caption.innerText = `${this.index + 1} / ${this.DOM.els.length}`;
		this.DOM.title.innerText = `${this.DOM.els[this.index].dataset.videoTitle}`;

		// Make it a Plyr object
		new Plyr(this.DOM.content.firstChild);
	}

	prev() {
		// Set index and make html for video content
		this.index === 0 ? this.index = this.DOM.els.length - 1 : this.index = this.index - 1;
		const video = makeHTML(this.DOM.els[this.index].dataset.videoSrc);

		// Update content in modal
		this.DOM.content.innerHTML = video;
		this.DOM.caption.innerText = `${this.index + 1} / ${this.DOM.els.length}`;
		this.DOM.title.innerText = `${this.DOM.els[this.index].dataset.videoTitle}`;

		// Make it a Plyr object and a
		new Plyr(this.DOM.content.firstChild);
	}
}

const makeHTML = (src) => {
	return `<div class="plyr__video-embed">
		<iframe
		src="${src}"
		allowfullscreen
		allowtransparency
		class="absolute inset-0 w-full h-full"
		></iframe>
	</div>`;
}