<?php
/**
 * Template Name: Info
 * Description: The Template for displaying all videos in a page
 */

use Timber\Timber;

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

Timber::render( 'page-about.twig', $context );
