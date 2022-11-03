<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" >
        <title>Função</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <?php

            function multiplicar($numero1, $numero2) {
                return $numero1 * $numero2;
            }
        ?>

        <?= multiplicar(2, 4) ?>
    </body>
</html>
