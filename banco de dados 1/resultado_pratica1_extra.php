<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Sistema de Clientes</h1>

    <?php 
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbName = "db_clientes";

        $conn = new \PDO(
            "mysql:host=$servername;dbname=$dbName",
            $username,
            $password
        );

        $stmt = $conn->prepare("SELECT * FROM clientes");
        $stmt->execute();

        $result = $stmt->fetchAll();
    ?>

    <table border="solid">
        <tr>
            <th>nome</th>
            <th>sobrenome</th>
            <th>rg</th>
        </tr>

        <?php foreach($result as $lineOdDb): ?>
            <tr>
                <td><?=  $lineOdDb['nome'] ?></td>
                <td><?=  $lineOdDb['sobrenome'] ?></td>
                <td><?=  $lineOdDb['rg'] ?></td>
            </tr>
        <?php endforeach ?>
    </table>

</body>
</html>
