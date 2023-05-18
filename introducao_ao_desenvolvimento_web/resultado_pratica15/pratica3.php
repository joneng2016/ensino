<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>
<body>
    <?php
        // Recebe cinco valores, calcula a média entre eles - se a média for maior do que 10, 
        // imprimir "é maior do que 10", se for menor do que 10, imprimir em vermelho, menor do 
        // que 10.

        $v1 = $_REQUEST['v1'];
        $v2 = $_REQUEST['v2'];
        $v3 = $_REQUEST['v3'];
        $v4 = $_REQUEST['v4'];
        $v5 = $_REQUEST['v5'];


        $media = ($v1+$v2+$v3+$v4+$v5)/5;
    ?>


    <?php if ($media >= 10): ?>
        <span>É maior do que 10</span>
    <?php elseif($media < 10): ?>
        <span style="background-color:red">
            É menor do que 10
        </span>
    <?php endif ?>

</body>
</html>
