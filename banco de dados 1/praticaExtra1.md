# Prática Extra 1

Tutorial de criação de uma conexão com banco de dados usando PDO:

https://www.w3schools.com/php/php_mysql_intro.asp



Tutorial de como realizar um SQL usando PDO: 

https://www.w3schools.com/php/php_mysql_select.asp



Recomendação de como fazer uma tabela em HTML: 

https://www.w3schools.com/html/html_tables.asp




Segue parte do código que pode facilitar seu entendimento: 


```
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
```


