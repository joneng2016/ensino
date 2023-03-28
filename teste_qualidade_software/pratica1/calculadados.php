<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste Caixa Preta 1</title>
    </head>
    <body>
        <?php
            const NULL_VALUE = NULL;
            const EMPTY_STRING = "";
            const ZERO = 0;
            const KEY_TEST_LESS_OF_ZERO = 2;

            $possiblitsOfError = [NULL_VALUE,EMPTY_STRING];

            $isEmptyCondition = $_POST['real_value'] === NULL_VALUE || $_POST['real_value'] === EMPTY_STRING;
            $isLessOfZero = $_POST['real_value'] <= ZERO;

            if ($isEmptyCondition || $isLessOfZero) :
        ?>
            <h3>Por favor, volte a tela inicial e entre com o valor válido para o real</h3>
        <?php
                return;
            endif;
        ?>
        
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

            $conn = new \PDO('mysql:host=localhost;dbname=dolar_real;port=3307','root', '');
            $sql = "INSERT INTO dolar (dolar_value) VALUES (?)";
            $stmt= $conn->prepare($sql);
            $stmt->execute([$dolarValue]);
        
        ?>
        <h2>Requisição finalizada com sucesso</h2>
        <h3>Foi escrito no banco de dados <?= $dolarValue ?></h3>
    </body>
</html>
