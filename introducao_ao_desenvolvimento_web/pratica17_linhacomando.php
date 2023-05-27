<?php


$nota = -1;

while ($nota < 0 || $nota > 10) {
    $nota = (int)readline('Entre com o valor da nota entre 0 e 10: ');
    echo "A nota que você digitou está errada, e é:" . $nota . "\n";
}
