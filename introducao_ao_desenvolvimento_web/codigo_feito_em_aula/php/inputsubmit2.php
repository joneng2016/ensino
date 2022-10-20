<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
    </head>
    <body>
        <header>
            <h2>Realização de um formulário</h2>
        </header>
        <form action="resultvaluesubmit.php" method="post">
            <label>Número</label>
            <br>
            <input name="inputnumber" type="number" min="0" max="100">
            <br>
            <br>
            <input type="submit" name="multiplicar" value="multiplica por 2">
        </form>
    </body>
</html>
