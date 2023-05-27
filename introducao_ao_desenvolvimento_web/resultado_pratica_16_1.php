<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lancheria</title>
    <style>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }

        span {
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <?php
        if (isset($_REQUEST['codigoDoProduto'])) {
            $codigoDoProduto = $_REQUEST['codigoDoProduto'];
        } else {
            echo "<span style=\"background-color:red;\">Informar código do produto</span><br>";

            return;
        }

        if (isset($_REQUEST['quantidadeDoProduto'])) {
            $quantidadeDoProduto = $_REQUEST['quantidadeDoProduto'];
        } else {
            echo "<span style=\"background-color:red;\">Informar a quantidade do produto</span><br>";

            return;
        }

        $valorSelecionado = 0;
          
          
          
          
        switch ($codigoDoProduto) {
            case 100:
                $valorSelecionado = 1.70;
            break;
            case 101:
                $valorSelecionado = 2.30;
            break;
            case 102:             
                $valorSelecionado = 2.60;
            break;                
            case 103:
                $valorSelecionado = 2.40;            
            break;             
            case 104:
                $valorSelecionado = 2.50;
            break; 
            case 105:
                $valorSelecionado = 1.0;
            break;
        }

        $valorFinal = $valorSelecionado * $quantidadeDoProduto;
    ?>

    <h3>
        R$ <?= number_format($valorFinal,2,",",".") ; ?>
    </h3>
</body>
</html>
