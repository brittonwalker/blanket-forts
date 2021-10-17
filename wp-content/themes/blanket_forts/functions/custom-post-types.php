<?php

namespace Blanket_Forts;

/**
* Registers a new post type
* @uses $wp_post_types Inserts new post type object into the list
*
* @param string  Post type key, must not exceed 20 characters
* @param array|string  See optional args description above.
* @return object|WP_Error the registered post type object, or an error object
*/
add_action( 'init', __NAMESPACE__ . '\\create_post_types' );
function create_post_types() {

	// Videos
	$labels = array(
		'name'                => __( 'Videos', 'text-domain' ),
		'singular_name'       => __( 'Video', 'text-domain' ),
		'add_new'             => _x( 'Add New Video', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Video', 'text-domain' ),
		'edit_item'           => __( 'Edit Video', 'text-domain' ),
		'new_item'            => __( 'New Video', 'text-domain' ),
		'view_item'           => __( 'View Video', 'text-domain' ),
		'search_items'        => __( 'Search Videos', 'text-domain' ),
		'not_found'           => __( 'No Videos found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Videos found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Video:', 'text-domain' ),
		'menu_name'           => __( 'Videos', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => false,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => true,
		'rewrite'             => array(
			'slug' => 'videos',
			'with_front' => false
		),
		'supports'            => array(
			'title', 'thumbnail',
		)
	);

	register_post_type( 'videos', $args );

	// Photos
	$labels = array(
		'name'                => __( 'Photos', 'text-domain' ),
		'singular_name'       => __( 'Photo', 'text-domain' ),
		'add_new'             => _x( 'Add New Photo', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Photo', 'text-domain' ),
		'edit_item'           => __( 'Edit Photo', 'text-domain' ),
		'new_item'            => __( 'New Photo', 'text-domain' ),
		'view_item'           => __( 'View Photo', 'text-domain' ),
		'search_items'        => __( 'Search Photos', 'text-domain' ),
		'not_found'           => __( 'No Photos found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Photos found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Photo:', 'text-domain' ),
		'menu_name'           => __( 'Photos', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => false,
		'supports'            => array(
			'title', 'thumbnail', 'editor'
		)
	);

	register_post_type( 'photos', $args );

	// Doodles
	$labels = array(
		'name'                => __( 'Doodles', 'text-domain' ),
		'singular_name'       => __( 'Doodle', 'text-domain' ),
		'add_new'             => _x( 'Add New Doodle', 'text-domain', 'text-domain' ),
		'add_new_item'        => __( 'Add New Doodle', 'text-domain' ),
		'edit_item'           => __( 'Edit Doodle', 'text-domain' ),
		'new_item'            => __( 'New Doodle', 'text-domain' ),
		'view_item'           => __( 'View Doodle', 'text-domain' ),
		'search_items'        => __( 'Search Doodles', 'text-domain' ),
		'not_found'           => __( 'No Doodles found', 'text-domain' ),
		'not_found_in_trash'  => __( 'No Doodles found in Trash', 'text-domain' ),
		'parent_item_colon'   => __( 'Parent Doodle:', 'text-domain' ),
		'menu_name'           => __( 'Doodles', 'text-domain' ),
	);

	$args = array(
		'labels'              => $labels,
		'exclude_from_search' => false,
		'taxonomies'          => array(),
		'public'              => true,
        'has_archive'         => false,
        'publicly_queryable'  => true,
		'menu_position'       => 15,
		'show_in_rest' 		  => false,
		'supports'            => array(
			'title', 'thumbnail',
		)
	);

	register_post_type( 'doodles', $args );

}