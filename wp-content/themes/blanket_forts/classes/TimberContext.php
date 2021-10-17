<?php

namespace Blanket_Forts;

use TimberMenu;

class TimberContext {

	/**
	 * Add the `timber_context` filters.
	 */
	public static function init() {

		add_filter( 'timber_context', array( __CLASS__, 'add_menus' ) );

	}

	public static function add_menus( $context ) {

		$context['menu'] = new TimberMenu();

		return $context;

	}

}
TimberContext::init();