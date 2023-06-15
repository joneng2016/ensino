# Prática 18

## Arquivo index.php

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo Formulário</title>
</head>
<body>
    <form method="POST" action="recebe_request.php" >
        <input 
            type="text"
            name="nome"
            placeholder="entre com seu nome"
            
        >
        <br>
        <br>        
        <input type="submit" text="Enviar"></input>
    </form>
</body>
</html>
```



## receber_request.php
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $textToShowByClient = "Por gentileza, informar o dado correto!";

        if (isset($_POST["nome"]) && $_POST["nome"] != "") {            
            $textToShowByClient = "Requisição recebida com sucesso!";         
            $name = $_POST["nome"];
        }

    ?>
    <h3><?=  $textToShowByClient ?></h3>
    <?php if (isset($name)): ?>
        <h4><?= $name ?></h4>
    <?php endif ?>
</body>
</html>
```
