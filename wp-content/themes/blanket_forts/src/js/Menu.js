/**
 * Menu.js
 */

import { gsap } from 'gsap';

export class Menu {

	constructor() {

		this.DOM = {
			el: document.getElementById('menu'),
			menu: document.querySelector('.menu'),
			navItems: document.querySelectorAll('.mobile-nav-item')
		};

		this.bindEvents();
		
	}

	bindEvents() {
		this.DOM.el.addEventListener('click', () => this.menuState() );
	}

	menuState() {

		if ( document.body.classList.contains('menu-active') ) {

			this.out();
			// 
		} else {
			this.in();
		}
		//  ?  : document.body.classList.add('menu-active');


	}

	in() {
		document.body.classList.add('menu-active')

		gsap.timeline({defaults: {duration: .3, ease: 'expoOut'}})
		.set(this.DOM.navItems, {
			x: window.outerWidth * .25,
		})
        .to(this.DOM.menu, {
			x: 0,
			y: 0
        })
		.to([...this.DOM.navItems].reverse(), {
			opacity: 1,
			x: 0,
			delay: .15,
			stagger: 0.1,
		})
	}

	out() {
		document.body.classList.remove('menu-active')

		gsap.timeline({defaults: {duration: .3, ease: 'expoIn'}})
		.to([...this.DOM.navItems].reverse(), {
			opacity: 0,
			x: window.outerWidth * .15,
			duration: .15,
			stagger: 0.05,
		})
        .to([this.DOM.menu], {
			x: window.outerWidth,
			y: 0
        })
	}

}