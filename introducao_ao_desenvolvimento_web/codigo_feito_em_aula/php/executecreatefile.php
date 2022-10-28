<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Criação do arquivo</title>
        <link rel="stylesheet" href="style.css">
    <head>
    <body>
        <?php
            $info = $_POST['info'];

            if (!$info || $info == "") {
                echo "<h3>Você não informou o conteúdo do arquivo</h3>";
                return false;
            }
            $info = $info . "\n";
            $addressOfFile = __DIR__ . "\arquivo.txt" ;

            $file = fopen($addressOfFile, "a");
            fwrite($file, $info);

            fclose($file);

            echo "<h3> O arquivo foi escrito com sucesso </h3>";
        ?>

    </body>
</html>
