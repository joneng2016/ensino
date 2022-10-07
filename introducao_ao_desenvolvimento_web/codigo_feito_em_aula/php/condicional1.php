<!DOCTYPE html>
<hmtl>
    <head>
        <meta charset="utf-8">
        <title>Condicionais</title>
    </head>
    <body>
        <h2>Condicionais básicas</h2>
        <?php 
            $book = 'Fortaleza ';

            if ($book == 'Fortaleza Digital') {
                echo '<strong>É um bom livro </strong>';
            } else {
                echo '<strong> Talvez seja um bom livro </strong>';
            }

            $bookTwo = 'O Homem que matou Getulio Vargas';
            echo '<br>';

            if ($bookTwo == 'Fortaleza Digital') {
                echo '<strong>É um bom livro </strong>';
            } elseif ($bookTwo == 'O Homem que matou Getulio Vargas') {
                echo '<strong> Esse aqui também é um livro bom </strong>';
            } else {
                echo '<strong> Talvez seja um bom livro </strong>';
            }

            echo '<br>';

            $temperatura = 37;

            if ($temperatura < 40) {
                echo '<strong>temperatura é menor que 40</strong><br>';
            } elseif ($temperatura < 39.5 ) {
                echo '<strong>temperatura é menor que 39.5</strong><br>';
            } elseif ($temperatura < 39 ) {
                echo '<strong>temperatura é menor que 39</strong><br>';
            } elseif ($temperatura < 38 ) {
                echo '<strong>temperatura é menor que 38</strong><br>';
            } else {
                echo '<strong>temperatura é menor que algum valor</strong><br>';
            }

            echo '<br>';
            echo '<br>';
            echo '---------------------------------------';
            echo '<br>';
            $temperatura = 39;

            if ($temperatura < 40) {
                echo '<strong>temperatura é menor que 40</strong><br>';
            } 
            
            if ($temperatura < 38 ) {
                echo '<strong>temperatura é menor que 38</strong><br>';
            } 
            
            else {
                echo '<strong>temperatura é menor que algum valor</strong><br>';
            }

            echo '<br>';

            echo '<h2>E na regra lógica</h2>';

            $temperatura = 37;
            
            if ($temperatura < 50 && $temperatura < 45) {
                echo "<strong>Sua temperatura é menor do que 50 e 45</strong><br>";
            } elseif ($temperatura < 50 && $temperatura < 25) {
                echo "<strong>Sua temperatura é menor do que 50 e 25</strong><br>";
            } else {
                echo "<strong>Sua temperatura não é menor do que nada</strong><br>";
            }
        ?>
    </body>
</html>