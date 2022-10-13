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
        </main>
    </body>
</html>
