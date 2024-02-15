# Aula 3 - Orientação a objetos

## Referências:
* __Turini, Rodrigo - Desbravando Java e Orientação a Objeto - Um guia para o iniciante da linguagem__
* __Furgei, Sérgio__ - Programação orientada a objetos: Conceitos e técnicas Capa comum – 31 março 2014
* __Herbert Schildt__, __Maria Lúcia Blanck Lisbôa Aldir José Coelho Corrêa da Silva__ - Java para Iniciantes: Crie, Compile e Execute Programas Java Rapidamente


## Revisão

* Como iniciar um projeto básico Java no IntelliJ
* Declaração e atribuição de variáveis
```
public class CalculadoraDeEstoque {

    public static void main(String[] args) {
        double livroJava8;
        double livroTDD;

        livroJava8 = 59.90;
        livroTDD = 59.90;
    }
}
```

* Tipos primitivos - Tipos de variáveis que a linguagem nos fornece.

![alt text](aula3.png "Tipos")

* Condicionais

```
if (soma < 150) {
    System.out.println("Seu estoque está muito baixo!");
} else {
    System.out.println("Seu estoque está bom");
}
```


* Laços de repetição

```
double soma = 0;
int contador = 0;

while (contador < 35) {
    double valorDoLivro = 59.90;
    soma = soma + valorDoLivro;
    contador = contador + 1;
}
```

...


```
for (double i = 0; i < 35; i ++) {
    soma += 59.90;
}
```