# Prática 17

Utilização do `while`

```
<?php

$counter = 0;

while ($counter <= 7) {
  echo "<span>" . $counter . "</span><br>";
  $counter++; // é a mesma coisa de fazer $counter = $counter + 1;
}
```


Utilização do `for`
```
<?php

for ($i = 0; $i < 10; $i++) {
  echo "<span>" . $i . "</span><br>";
}
```

1) Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.


2) Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
01 e 02 - Validando dados em PHP


3) Faça um programa que leia e valide as seguintes informações:

Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';

4) Use a função strlen(string) para saber o tamanho de um texto (número de caracteres).

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.


5) Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
04 e 05: População de duas cidades


6) Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.


7) Faça um programa que leia 5 números e informe o maior número.


8) Faça um programa que leia 5 números e informe a soma e a média dos números.
07 e 08: Descobre maior, soma e média


9) Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
