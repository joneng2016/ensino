index.php

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar arquivo</title>
</head>
<body>
    <form method="POST" action="file.php">
        <label>nome</label>
        <input type="text" placeholder="Entre com o nome" name="nome">
        <br>
        <br>        
        <label>idade</label>
        <input type="number" placeholder="Entre a idade" name="numero">
        <br>
        <br>        
        <input type="submit">

    </form>
</body>
</html>
```

file.php
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <?php
        $name = $_POST['nome'];
        $number = $_POST['numero'];
        
        
        $contentOfFile = $name . "-" . $number . "<br>\n";

        $myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
        fwrite($myfile, $contentOfFile);        
        fclose($myfile);

    ?>

    <h2>Arquivo escrito</h2>
    <h2>Conteúdo</h2>
    <?php
        $myfile = fopen("newfile.txt", "r") or die("Unable to open file!");
        echo fread($myfile,filesize("newfile.txt"));
        fclose($myfile);
    ?>
</body>
</html>
```
