<?php

function insereInicialRetornaSexo($inicial) {
    $response = "você não informou uma inicial válida";

    if ($inicial === 'm' || $inicial === 'M') {
        $response = 'Masculino';
    }

    if ($inicial === 'f' || $inicial === 'F') {
        $response = 'Feminino';
    }

    return $response;
}

function retornaTexto() {                    
    $data = date('Y-m-d h:i:s A');

    return  "O Quenam terminou o namoro no dia " . $data;
}


function formataTextoNomeEntrada($nome) {
    if ($nome != "") {
        echo "O mano do cara ali com nome ". $nome . " sofreu um acidente";
    }
}
