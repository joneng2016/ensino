<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Aula de JS 1</title>
    </head>
    <body>
        <article>
            <hgroup>
                <h2>Aula de JS</h2>                
            </hgroup>
            <div>
                <h2 id="recieve-title"></h2>
            </div>
            <div>
                <span id="var1"></span>
            </div>
            <div>
                <span id="var-let-1"></span>
            </div>
        </article>
        <script type="text/javascript" >
            console.log("Olá Mundo")

            document.getElementById("recieve-title").innerHTML = "Essa é uma outra forma de Olá Mundo"

            // Conceito de variável

            var variavel = "eu sou uma variável"
            document.getElementById("var1").innerHTML = variavel

            let varWithLet = "Uma variável com let"
            document.getElementById("var-let-1").innerHTML = varWithLet  
        

            if (0 == 0) {
                var var1 = "Variavel 1 foi criada"
            }

            console.log(var1)

            
            if (1 == 1) {
                let var2 = "Variavel 2 oi criada"

                if (2 == 2) {
                    console.log('Dentro do 2 == 2')
                    console.log(var2)
                }
            
                console.log(var2)
            }

            console.log(var2)
        </script>
    </body>
</html>
