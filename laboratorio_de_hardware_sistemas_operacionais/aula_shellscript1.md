# Aula ShellScript 1

## Comando echo

Comando "echo" printa alguma dada informação.

## Acesso ao diretório do usuário

```
echo "acessando o usuário"
cd ~;
```


## Criando um diretório

```
echo "comando de criar uma pasta"
echo "o argumento -p cria uma pasta apenas se ela não existe"

mkdir -p meudiretorio;

```

## Acessar um diretório

```
echo "argumento cd acessa o respectivo diretório";

cd meudiretorio;
```

## Sai do diretório atual voltando para o diretório anterior

```
echo "volta um nível";

cd ..;
```

## Saber o endereço onde você está

```
echo "estou aqui";
pwd;

```
