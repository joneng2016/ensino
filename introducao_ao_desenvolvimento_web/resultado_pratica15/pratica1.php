<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>
<body>
    <?php
        //Faça um código que receba uma palava em uma 
        //variável "palavra" e a retorne na tela em h1

        $word = $_REQUEST["palavra"];

        echo "<h1>" . $word ."</h1>";

    ?>
</body>
</html>
