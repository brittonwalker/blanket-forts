<?php

$templates = array( 'archive-photos.twig', 'index.twig' );

$context = Timber::context();

$context['posts'] = new Timber\PostQuery();

Timber::render( $templates, $context );