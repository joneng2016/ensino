<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste Caixa Preta 1</title>
    </head>
    <body>        
        <?php
            if ($_POST['user_name'] !== 'jonathan') :
        ?>
            <h2>"Usuário não habilitado"</h2>
        <?php
                return; 
            endif;
        ?>

        <?php
            $dolarValue = ((float) $_POST['real_value']) / 5.20;

            $conn = new \PDO('mysql:host=localhost;dbname=dolar_real','root', '');
            $sql = "INSERT INTO dolar (dolar_value) VALUES (?)";
            $stmt= $conn->prepare($sql);
            $stmt->execute([$dolarValue]);
        
        ?>
        <h2>Requisição finalizada com sucesso</h2>
        <h3>Foi escrito no banco de dados <?= $dolarValue ?></h3>
    </body>
</html>
