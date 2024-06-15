<?php
/*
Plugin Name: Meu Plugin de Conteúdo
Description: Um plugin que adiciona conteúdo a um filtro específico.
Version: 1.0
Author: Seu Nome
*/

function adicionar_conteudo_personalizado($content) {
    if (is_single()) {
        $conteudo_extra = '<p>Este é um conteúdo adicional personalizado.</p>';
        $content .= $conteudo_extra;
    }
    return $content;
}

add_filter('the_content', 'adicionar_conteudo_personalizado');