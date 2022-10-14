<!DOCTYPE html>
<html>
    <head>
        <title>Laços de Repetição</title>
        <meta charset="utf-8" />
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>        
    </head>

    <body>
        <header>
            <hgroup>
                <h3>Laços de Repetições</h3>
            </hgroup>                
        </header>

        <main>
            <article>
                <h3>While</h3>

                <?php 
                    $i = 0;

                    while($i < 10) {
                        echo "{$i}<br>";

                        $i++; // $i = $i + 1;
                    }
                ?>
                <h3>Soma consigo mesmo</h3>
                <?php
                    $j = 3;
                    
                    $j = $j + $j;

                    echo $j . "<br>";

                    $k = 3;

                    $k += $k;

                    echo $k . "<br>";
                ?>
            </article>

            <article>
                <h3> For </h3>

                <?php 
                    $nomes = [
                        'Fabiano',
                        'Eduardo',
                        'Monica',
                        'Paulo',
                        'Alessandra'
                    ];

                    // Tamanho de um array, com sizeof

                    for ($i = 0; $i <= 4; $i++) {
                        echo "<span>" . $nomes[$i] . "</span></br>"; 
                    }

                    // é mesma coisa que fazer o seguinte
                    echo "<strong> utilizando sizeof </strong><br>";

                    for ($i = 0; $i < sizeof($nomes); $i++) {
                        echo "<span>" . $nomes[$i] . "</span></br>"; 
                    }
                ?>

                <h3>Combinando for com if</h3>

                <?php
                    $countries = [
                        'Brasil',
                        'Holanda',
                        'Reino Unido',
                        'França',
                        'Espanha'
                    ];
                ?>


                <ul>
                <?php
                    for($i = 0; $i < sizeof($countries); $i++):
                ?>
                
                    <?php
                        $country = $countries[$i];

                        $color = 'blue';
                        if (strlen($country) < 10) {
                            $color = 'red';
                        }
                    ?>
                    
                    
                    <li><span style=<?= "\"color:".$color."\""  ?> ><?= $country ?></span></li>                    
                <?php 
                    endfor
                ?>
                </ul>

                
                <h3> foreach </h3>


                <?php

                    $motos = [
                        'Twister',
                        'cg160',
                        'ninja',
                        'xre300'
                    ];

                    echo "<ul>";

                    foreach($motos as $moto){
                        if (strlen($moto) <= 5) {
                            echo "<li style=\"color:green\">" . $moto . "</li>";
                        } else {
                            echo "<li style=\"color:yellow\">" . $moto . "</li>";
                        }

                    }

                    echo "</ul>";
                ?>
            </article>
        </main>
    </body>
</html>
