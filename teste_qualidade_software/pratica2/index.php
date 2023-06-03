<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste Caixa Preta 1</title>
        <style>
            .text-input {
                width: 300px;
            }
        </style>
    </head>
    <body>
        <form method="POST" action="calculadados.php">
            <input
                class="text-input" 
                type="text"
                placeholder="Entre com o nome do usuário"
                name="user_name"
            >
            <br>
            <br>
            <input 
                type="number"
                step="0.01"
                placeholder="Entre com o valor do real"
                name="real_value"
            >
            <br>
            <br>
            <input 
                type="submit"
                value="Enviar Dado"
            />
        </form>
    </body>
</html>
