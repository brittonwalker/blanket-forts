/**
 * CopyLink.js
 */

export class CopyLink {
 
	constructor() {
		
		if (!document.getElementById("copy-link")) return;

		this.DOM = {
			el: document.getElementById("copy-link"),
			alert: document.getElementById("copy-link-alert"),
		}

		this.active = false;

		if (window.outerWidth < 768) return;

		this.DOM.el.addEventListener('click', (event) => this.copyText(event));
	  
	}

	copyText(event) {
		event.preventDefault();
		navigator.clipboard.writeText(this.DOM.el.dataset.mailLink)

		if (this.active) return;
		this.letThemKnow();
	}

	letThemKnow() {
		this.active = true;
		this.DOM.alert.classList.add('active')

		setTimeout(() => {
			this.DOM.alert.classList.remove('active');
			this.active = false;
		}, 1000)
	}
  
}