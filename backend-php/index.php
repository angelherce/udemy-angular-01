<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get( "/pruebas", function() {
    echo 'Hi World !';
});

$app->run();