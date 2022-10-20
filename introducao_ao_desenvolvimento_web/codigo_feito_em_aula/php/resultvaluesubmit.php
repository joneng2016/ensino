<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Resultado do Valor</title>
        <style>
                body {
                    font-family: Arial, Helvetica, sans-serif;
                }
        </style>
    </head>
    
    <body>
        <header>
            <h2>Resultado da Multiplicação por dois é</h2>
        </header>
        <main>
            <?php if (isset($_POST['inputnumber']) && $_POST['inputnumber'] !== ""): ?>                
                <h3> <?= 2*$_POST['inputnumber'] ?> </h3>
            <?php else: ?>
                <h3> Você não inseriu nenhum número para realizar essa multiplicação</h3>
            <?php endif ?>
        </main>
    </body>
</html>
