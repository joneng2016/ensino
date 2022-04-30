# Aula Teste

* Curso baseado na apostila - Programação Orientada a Objeto: Uma Abordagem com Java
* https://www.w3schools.com/java/tryjava.asp?filename=demo_class_method

## Classe 

* Ao observar os seres vivos, verificamos que é possível agrupa-los em categorias tendo como base seus atributos físicos.

* Esse processo pode ser feito verificando grupos, subgrupos e assim por diante.

* Por exemplo: Samambaia, Hortelã, Macaco, Gato, Cachorro. A ciência da biologia cria os seguintes grupos: 

* Vegetais
    * Samambaia
    * Hortelã
* Animais
    * Macaco
    * Cachorro
    * Gato

Ao conceito de classificação denomina-se taxonomia.

* Podemos dizer que Vegetal é uma classe porque define uma série de seres vivos. Animais também. Macaco também, Samambaia também.

Já o Frajola, que é um gato, é um "objeto" da classe Gato. Ele também é um objeto da classe Animal. Logo, uma classe pode ser entendida como uma definição de propriedades e métodos.

___Uma classe é uma forma de definir um conjunto de objetos___

* Possui nome
* Possui atributos
* Possui Métodos


```
public class Car {

    // atributos
    private String name; // nome
    private String color; // cor
    private int numberOfDoors; // número de portas
    private int power; // quantos cavaos
    private int engineCapacity; // cilindrada


    // métodos
    public void turnOnCar(Bo) {
        // logic code...     
    }
}

```

__Classe__
* Possuem um nome
* podem ser público/privados

__Atributos__
* Todo atributo pode ser públic/privado
* Atributos podem ser primitivos ou não;
* Atibutos contem valores que são usados pela classe.


__Métodos__
* Executa algum processo lógico - idem função da programação estruturada.
* Podem ser públicos/privados


__Demonstrativo__
```
public class Main {
  public static void main(String[] args) {
	Cliente cliente = new Cliente();
    
  }
}


class Cliente {	
    private String nome;
    private String sobreNome;
    private String endereco;
    private int idade;
	private String genero;
    private String profissao;
    private float massa;
    private boolean temCarro;
    
    public void setNome(String nome) {
    	this.nome = nome;
    }
}
```

