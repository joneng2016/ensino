<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Revisão para a prova</title>
    </head>
    <body>
        <!-- 
            
        9 Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deverá terminar quando for lido um número negativo. 
    
        -->

        <?php
    
            $number;

            if (isset($_POST['number'])) {
                $number = $_POST['number'];
            } 

            if (isset($number)) {

                $otherNumbers = '';

                if (isset($_POST['other-numbers'])) {
                    $otherNumbers = $_POST['other-numbers'];
                } 

                if ($number < 0) {
                    $numbersInput = explode(",", $otherNumbers);

                    $de0a25 = 0;
                    $de26a50 = 0;
                    $de51a75 = 0;
                    $de76a100 = 0;

                    foreach($numbersInput as $numberInput) {              
                        if ($numberInput >= 0 && $numberInput <= 25) {
                            $de0a25 += 1;
                        } else if ($numberInput >= 26 && $numberInput <= 50) {
                            $de26a50 += 1;
                        } else if ($numberInput >= 51 && $numberInput <= 75) {
                            $de51a75 += 1;
                        } else if ($numberInput >= 76 && $numberInput <= 100) {
                            $de76a100 += 1;
                        }
                    }

                    echo "                
                        <span>0 a 25 ----</span>$de0a25<br>
                        <span>26 a 50 ----</span>$de26a50<br>
                        <span>51 a 75 ----</span>$de51a75<br>
                        <span>75 a 100 ----</span>$de76a100<br>
                    ";
                    return;
                }


                if ($otherNumbers !== '') {
                    $otherNumbers .= ',' . $number;  
                } else {
                    $otherNumbers .= $number;  
                }
            }                
        ?>
        
        <form action="index.php" method="POST" >
            <label>Insira um número</label>
            <input name="number" type="number" />
            <br>
            <input style="display:none;" value=<?php if (isset($otherNumbers)) { echo $otherNumbers;} ?> name="other-numbers" type="text" />
            <br>
            <input type="submit" value="submeter" >
        </form>
    </body>
</html>
