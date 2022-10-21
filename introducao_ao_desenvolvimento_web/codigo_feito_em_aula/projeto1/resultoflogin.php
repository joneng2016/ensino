<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Login</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <?php
            $email = $_POST['email'];
            $password = $_POST['senha'];
        ?>
        <main>
            <?php if (!$email || $email == ''):?>
                <span> Por favor, informe o seu e-mail </span>
                <?php return false; ?>
            <?php endif ?>
            <?php if (!$password || $password == ''):?>
                <span> Por favor, informe a sua senha </span>
                <?php return false; ?>
            <?php endif ?>
            <?php
                $emailsAcceptables = [ 
                    'email1@senac.com',
                    'email2@senac.com',
                    'email3@senac.com'
                ];

                $isEmailExist = in_array($email,$emailsAcceptables);

            ?>

            <?php if (!$isEmailExist): ?>
                <span> Esse e-mail não existe na nossa base de dados </span>
                <?php 
                    return false;
                ?>
            <?php endif ?>
            
            <?php
                $passwords = [ 
                    'senha1',
                    'senha2',
                    'senha3'
                ];

                $passwordSelected = "";

                foreach($emailsAcceptables as $keyEmail => $valueEmail) {
                    if ($valueEmail === $email) {
                        $passwordSelected = $passwords[$keyEmail];
                    }
                }       
            ?>
            <?php if ($password !== $passwordSelected): ?>
                <span> Você inseriu a senha errada </span>
                <?php 
                    return false;
                ?>                
            <?php endif ?>

            <span>Login executado com sucesso</span>
        </main>
    </body>
</html>
