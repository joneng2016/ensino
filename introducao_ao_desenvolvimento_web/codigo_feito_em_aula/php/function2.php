<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" >
        <title>Funcoes2</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <?php
                require('libfunctions.php');
            ?>

            <span><?= insereInicialRetornaSexo('m'); ?></span> <br>
            <span><?= insereInicialRetornaSexo('F'); ?></span> <br>
            <span><?= insereInicialRetornaSexo('s'); ?></span> <br>

            <br>
            <br>
            <span><?= retornaTexto(); ?></span> <br>

            <br>
            <br>
            <span><?php formataTextoNomeEntrada("Kenny"); ?></span> <br>

        </main>
    </body>        
</html>
