<?php
/**
 * Template Name: Videos
 * Description: The Template for displaying all videos in a page
 */

use Timber\Timber;

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

$args = array(
    'post_type' => 'videos',
);
$context['posts'] = Timber::get_posts($args);

Timber::render( 'page-videos.twig', $context );
