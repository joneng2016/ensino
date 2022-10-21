<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Login</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <hgroup>
                <h3>Entre com e-mail e senha para efetuar login</h3>
            </hgroup>                
        </header>
        <main>
            <div>
                <form action="resultoflogin.php" method="POST">
                    <div class="container-input">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="entre com seu email" />
                    </div>
                    <div class="container-input">
                        <label>Senha</label>
                        <input type="password" name="senha" placeholder="entre com a sua senha" />
                    </div>

                    <div class="container-input">
                        <input type="submit" value="login" />
                    </div>                                        
                </form>
            </div>
        </main>
    </body>
</html>
