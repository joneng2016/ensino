# Prática 8

Vamos agregar um pouco mais os conceitos desenvolvidos na prática 7. https://github.com/joneng2016/ensino/blob/master/introducao_ao_desenvolvimento_web/pratica7.md

A diferença é que você deverá adicionar mais parágrafos a última div. Os parágrafos são: 

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Integer sapien dolor, gravida et venenatis sit amet, tincidunt commodo urna. Donec iaculis nisl id nisl posuere suscipit. Donec vel tortor sed erat finibus euismod nec eget libero. Suspendisse vehicula, urna maximus aliquet iaculis, ante mauris imperdiet ex, vitae euismod mi dolor at ipsum. Morbi in sapien dapibus, dictum ipsum nec, blandit ante. Cras gravida nulla sed pharetra placerat. Etiam placerat sollicitudin ipsum, auctor gravida nulla tempus eget. Donec id tellus vehicula, tincidunt enim in, ultrices dui. Ut orci ipsum, faucibus rhoncus eleifend nec, suscipit eget ex.


Perceba que são dois parágrafos diferentes, logo cada um destes deverá ter uma tag <p>. Por exemplo:
  
<p>  ... a long established fact that ... </p>

<p>  ...  amet, tincidunt commodo urna ... </p>

Você pode perceber todo o parágrafo, em sua primeira linha, possui um espaçamento (conforme é regido pelas regras gramaticais dos idiomais ocidentais). A tag <p> fornece um espaçamento default. É possível alterar esse espaçamento utilizando css. O texto contem três parágrafos, adicione no primeiro um espaçamento inicial de 15 px, no seguindo de 50 px e no terceiro de 100 px. Para isso 

  
 Para resolver esse problema, investigue sobre:
  
  ```
      text-indent: 37px;
  ```
  
  
 
  
 Finalizou? Então agora faça o seguinte -> adicione entre o segundo e o terceiro parágrafo uma lista com três itens: 

psum is that it ha
barrassing hidden in t
rtor. Sed convallis venen
  
Você pode resolver isso da seguinte maneira: Para abrir a lista, use a tag <ul>. Cada item da lista deve estar contido dentro da tag <li>. Um exemplo de como usar as listas é:

```
<ul>
  <li> item 1 </li>  
  <li> item 2 </li>
  <li> item 3 </li>    
</ul>
```
