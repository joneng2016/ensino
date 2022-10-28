<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" >
        <title>Como criar e escrever um arquivo em PHP</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <hgroup>
                <h2> Como criar um arquivo em PHP </h2>
            </hgroup>
        </header>

        <form action="executecreatefile.php" method="POST">
            <div class="container-input">
                <label>Entre com o conteúdo</label>
                <input type="text" name="info" placeholder="entre com o conteúdo" />
            </div>

            <div class="container-input">
                <input type="submit" value="criar o arquivo" />
            </div>
        </form>
    </body>
</html>
