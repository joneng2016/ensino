<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Meu código PHP</title>
    </head>
    <body>
        <?php $euSouUmaVariavel = "eu tenho o valor de uma var"; ?>
         
        <?php echo $euSouUmaVariavel; ?>
        <br>
        <?= $euSouUmaVariavel ?>
        <br>
        <h2>Condicionais Lógicas no PHP</h2>
        <br>
        <?php
            $peso = 130;
            $altura = 1.93;

            $imc = $peso/($altura * $altura) ;
            echo "<span>{$imc}</span><br>";

            if ($imc > 18.5 && $imc < 24.9) {
                echo "<span>Normal</span>";
            }

            if ($imc > 25.0 && $imc < 29.9) {
                echo "<span>Sobrepeso</span>";
            }

            if ($imc >= 30 ) {
                echo "<span>Obesidade</span>";
            }

        ?>
    </body>
</html>