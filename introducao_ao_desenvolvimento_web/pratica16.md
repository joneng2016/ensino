# Prática 16

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>switch case</title>
</head>
<body>
    <?php
        if (isset($_REQUEST["sinal"])) {
            $sinal = $_REQUEST["sinal"];
        } else {
            $sinal = "não definiram";
        }

        
        $htmlToPrint = "";

        switch ($sinal) {
            case 'verde':
                $htmlToPrint = "<span>passar o sinal</span>";
                break;
            case 'amarelo':
                $htmlToPrint = "<span>atenção</span>";
                break;
            case 'vermelho':
                $htmlToPrint = "<span>parar no sinal</span>";
                break;
        }
    ?>

    <div>
        <?= $htmlToPrint; ?>
    </div>
</body>
</html>
```


1. O cardápio de uma casa de lanches é dado pela tabela abaixo:


Código | Produto | Preço Unitário (R$)

100 | Cachorro quente |  R$ 1,70

101 | Bauru Simples R$ | 2,30

102 | Bauru com ovo R$ | 2,60

103 | Hamburguer | R$ 2,40

104 | Cheeseburguer | R$ 2,50

105 | Refrigerante | R$ 1,00


Escreva um programa que leia o código do item adquirido pelo consumidor e a quantidade,
calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor,
somente o valor final.


2. Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto
ele contratou um programador para criar um programa que executasse esta tarefa. Para isso o
clube criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está
demonstrada abaixo:


IDADE CATEGORIA
De 05 a 10 Infantil
De 11 a 15 Juvenil
De 16 a 20 Junior
De 21 a 25 Profissional

Construa um programa que solicite o nome e a idade de um atleta e imprima a sua categoria.



3. Leia o código de um determinado produto e mostre sua classificação. Utilize a
seguinte tabela como referência:
Código Classificação


1 Alimento não-perecível
2,3 ou 4 Alimento perecível
5 ou 6 Vestuário
7 Higiene Pessoal
8 até 15 Limpeza e Utensílios Domésticos


Qualquer outro código Código inválido




4. Escreva uma página WEB onde o usuário vai inserir o número correspondente ao mês, ou seja, de 1 até 12 e o PHP vai devolver o nome, por extenso, do mês que o usuário digitou.
Use Switch






5 Faça uma página em HTML que receba o número de integrantes de uma equipe e o nome do líder da
equipe (utilizando o comando switch):

 0 : não forma equipe

 1: não forma equipe

 2, 3 ou 4: equipe formada com sucesso

 demais valores: inválidos

Se formar a equipe, apresente o nome do líder.
Dica: faça o teste, o comando switch aceita: case 1: case 2: case 3:





6 Faça uma página em HTML que mostre a bandeira de três países distintos. Quando o usuário clicar
sobre a bandeira, envie o nome do país para um programa PHP que lá fará a distinção mostrando o
nome de duas cidades do país selecionado e a língua que se fala neste país.
50. Construa uma página HTML na qual o usuário deverá entrar com uma das opções do menu para a
escolha do tipo de filme que gosta de assistir (utilize uma entrada do tipo radio ou outra a de seleção)
e a idade do usuário. Faça esta pesquisa para 5 usuários (apresente na página HTML a opção de
digitação para as cinco pessoas):

(a) Comédia

(b) Romance

(c) Terror

(d) Aventura

(e) Ação

(f) Ficção

Apresente no final cada gênero de filme e a média das idades dos usuários para cada seleção. Utilize
o comando switch.






7 Construa uma página HTML na qual o usuário deverá entrar com uma das opções do menu para a
escolha do tipo de filme que gosta de assistir (utilize uma entrada do tipo radio ou outra a de seleção)
e a idade do usuário. Faça esta pesquisa para 5 usuários (apresente na página HTML a opção de
digitação para as cinco pessoas):

(a) Comédia

(b) Romance

(c) Terror

(d) Aventura

(e) Ação

(f) Ficção

Apresente no final cada gênero de filme e a média das idades dos usuários para cada seleção. Utilize
o comando switch.
