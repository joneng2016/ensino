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
        <form action="inputsubmit.php" method="post">
            <label>Número</label>
            <br>
            <input name="inputnumber" type="number" min="0" max="100">
            <br>
            <br>
            <input type="submit" name="multiplicar" value="multiplica por 2">
        </form>

        <?php             
            if (isset($_POST['inputnumber'])) {
              $resultado = $_POST['inputnumber'] * 2;
            }
        ?>

        <?php if (isset($resultado)) : ?>
            <h3>Resultado</h3>
            <span>
                <?=  $resultado ?>
            </span>
        <?php endif ?>
    </body>
</html>
