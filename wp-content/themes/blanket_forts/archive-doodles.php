<?php

$templates = array( 'archive-doodles.twig', 'index.twig' );

$context = Timber::context();

$context['posts'] = new Timber\PostQuery();

Timber::render( $templates, $context );