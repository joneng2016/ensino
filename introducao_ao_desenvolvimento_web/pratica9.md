# Prática 9

Vamos verificar todas as possibilidades de trabalhar com uma lista. Faça uma tela com a seguinte estrutura:

Um título (em h1): com o fundo azul. A informação do título deve ser: "Possibilidades de Trabalho com a Lista". A cor da letra do título deve ser amarela. 
O texto deve estar centralizado, porém a cor azul deve ir de um extremo da tela até o outro.

Logo em seguinda, crie uma lista com as quatro coisas que você mais gosta de fazer. A lista deve ficar centralizada. Perceba que por default, a lista coloca um círculo
na frente de cada item. Vamos rever esse círculo, isso pode ser feito por adicionar o seguinte css que é utilizado nas <li>
  
 ```
   list-style-type: none;
 ```
  
  Uma outra característica da lista é que os itens ficam encadeados um sobre o outro. Mas pode ser que a gente queira que os items fiquem dispostos na mesma linha. Por exemplo, em vez de ser assim:

* conteudo 1 
* conteudo 2
* conteudo 3
  
  
  Deve ser desta forma:
  
  conteudo 1 conteudo 2 conteudo 3
  
  
  Você pode resolver esse desafio da seguinte forma. Dentro do css que ataca o <li> adicione o seguinte item 
 ```
  display: inline-block;
```
