<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">        
    </head>
    <body>
        <h3>Or</h3>
        <?php 

            $carZero = 'Chevet';
            $carOne = 'Fusca';
            $carTwo = 'Civic';
            $carThree = 'BMW';

            if ($carTwo == "Civic" || $carTwo == 'BMW') {
                echo "<span>". $carTwo . " é um bom carro </span><br>";
            }
            
            if ($carZero == "Fusca" || $carZero == 'Chevet') {
                echo "<span>" . $carZero . " É um carro velho </span> <br>";
            }
        ?>

        <h3>Array</h3>
        <?php 

            $cars = [
                'Chevet',
                'Fusca',
                'Civic',
                'BMW'
            ];

            echo "<span>A posicao 0 é " . $cars[0]. "</span><br>";
            echo "<span>A posicao 1 é " . $cars[1]. "</span><br>";
            echo "<span>A posicao 2 é " . $cars[2]. "</span><br>";
            echo "<span>A posicao 3 é " . $cars[3]. "</span><br>";
            
            echo "<br><br>";

            if ($cars[2] == "Civic" || $cars[2] == 'BMW') {
                echo "<span>". $cars[2] . " é um bom carro </span><br>";
            }

            if ($cars[0] == "Fusca" || $cars[0] == 'Chevet') {
                echo "<span>" . $cars[0] . " É um carro velho </span> <br>";
            }
        ?>

        <h3>Comparação com Boolean </h3>

        <?php 

            $onOf = true; // SE a variável for true, então liga se a variável for false então desliga


            if ($onOf == true) {
                echo "<span>ligado 1 </span><br>";
            }

            if ($onOf == 'true') {
                echo "<span>ligado 2</span><br>";
            }

            if ($onOf === true) {
                echo "<span>ligado 3</span><br>";
            }

            if ($onOf === 'true') {
                echo "<span>ligado 4</span><br> ";
            }

        ?>

        <h3>Mais um exemplo de == ===</h3>

        <?php 
            if (1 == '1') {
                echo 'entrou 1 <br>';
            }
            
            if (1 === '1') {
                echo 'entrou 2 <br>';
            }


            if (1 === 1) {
                echo 'entrou 3 <br>';
            }

        ?>

        <h3>Formas de realizar comparacao verdade</h3>
        
        <?php 
            $isOk = false;

            if ($isOk === true) {
                echo '<span>is true 1</span><br>';
            }


            if ($isOk) {
                echo '<span>is true 2</span><br>';
            }
        ?>


        <h3>Formas de realizar comparacao false</h3>
        
        <?php 
            $isOk = false;

            if ($isOk === false) {
                echo '<span>is false 1</span><br>';
            }


            if (!$isOk) {
                echo '<span>is false 2</span><br>';
            }
        ?>

    </body>
</html>
