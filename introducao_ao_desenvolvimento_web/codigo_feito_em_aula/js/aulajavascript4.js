<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Aula de Javascript - for</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- 
            Objetvio da aula

            * Array em JS
            * for em js
            * função main
        -->
    </head>
    <body>
        <!-- Título de tamanho h3 em html-->
        <h3>JS array</h3>

        <!-- 
            Uma tag <p> de tipo parágrafo
            Ela cria um parágrafo e aqui vai ser utilizada com o 
            objetivo de receber os dados que serão produzidos em JS
        -->
        <p id="imprime-js">
        </p>
        <script>
            // array em JS

            let diasDaSemana = ['domingo','segunda','terca','quarta','quinta','sexta','sábado']

            // acessado a primeira posicao do array 
            // diasDaSemana, que neste caso retorna domingo
            console.log(diasDaSemana[0])

            // criando uma variável com uma string vazia que será utilizada para concatenar os dias
            // da semana
            let textoQuePopulaTagP = ""
            // captar tamanho do array
            const tamanhoDoArray = diasDaSemana.length

            // usando um for para percorrer o array no js
            for (let index = 0; index < tamanhoDoArray; index++) {
                const valor = diasDaSemana[index]

                // verifica se é fim de semana comparando o valor
                // com o dia da semana, se é sábado ou se é domingo então deve ser fim de semana
                if (valor === 'sábado' || valor === 'domingo') {
                    // concatena o valor da regra textoQuePopulaTagP consigo mesma se é dia da semana
                    textoQuePopulaTagP = textoQuePopulaTagP + valor +  "- <span>fim de semana</span><br>" 
                } else {
                    // se a regra principal falhar, então entra aqui, que no caso define o dia como sendo
                    // dia de durante a semana
                    textoQuePopulaTagP = textoQuePopulaTagP + valor + " feira - <span>dia de semana</span><br>"                     
                }
            }

            //escrevendo a string que está armazenada na variável textoQuePopulaTagP dentro da tag
            // <p> que é identificada pelo id imprime-js

            document.getElementById("imprime-js").innerHTML = textoQuePopulaTagP

        </script>
    </body>
</html>
