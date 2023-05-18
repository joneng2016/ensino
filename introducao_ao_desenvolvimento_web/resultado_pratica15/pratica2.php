<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
</head>
<body>
    <?php
        // Recebe dois valores (v1 e v2, na url) e execute o segunte cálculo (V1*v2)/(v1+v2). 
        // Se o valor for maior do que 5 (>), imprimir o respectivo valor na cor azul, 
        // se for entre 0 e 5, imprimir em rosa e se 
        // for maior do que 20 imprimir em verde

        $v1 = $_REQUEST['v1'];
        $v2 = $_REQUEST['v2'];
        
        $result = ($v1*$v2)/($v1 + $v2);

        $response = "";

        if ($result > 5 && $result <= 20) {
            $response = "<span style=\"background-color:blue\">" . $result . "</span>";
        } elseif ($result > 0 && $result <= 5) {
            $response = "<span style=\"background-color:pink\">" . $result . "</span>";
        } elseif ($result >= 20) {
            $response = "<span style=\"background-color:green\">" . $result . "</span>";
        }

        echo $response;
    ?>
</body>
</html>
