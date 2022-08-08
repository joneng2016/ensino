<?php

class Car {
    
    public function __construct() {
        echo "construtor foi invocado\n";
    }

}

echo "iniciando a classe\n";
$car = new Car();
