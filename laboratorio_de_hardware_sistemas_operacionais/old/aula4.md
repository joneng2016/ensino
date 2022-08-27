# Aula 3

Precisamos criar o pipe de deploy de um serviço HTTP. Toda vez que o pipe de deploy é invocado ele precisa criar o diretório /servers/server-http, copiar os arquivos presentes os arquivos do diretorio onde o serviço se faz presente para /servers/server-http e, então subir, executar o respectivo serviço

## Criar o arquivo .ps

Pasta de usuário e crie um arquivo script1.ps;

## Dentro do arquivo define as variáveis

```
echo "INÍCIO DO PROGRAMA";

#declara as variávies principais
$NOME_DO_PROGRAMA = "servidor-win.exe";
$NOME_DO_PROGRAMA_EXECUCAO = ".\servidor-win.exe";
$ADDRES_MY_PROGRAM = "ENDEREÇO DE ONDE O PROGRAMA VAI SER PEGO" + $NOME_DO_PROGRAMA;
$ADDRESS_CREATE_NEW_SOFTWARE = "PARA ONDE O PROGRAMA VAI"

echo $NOME_DO_PROGRAMA;

cd ~;

```

## Criando o diretório de onde o nosso program vai ser Iniciado

```
echo "ENDEREÇO SERVIDOR HTTP ARMAZENADO NESTA VARIÁVEL";
echo  "$ADDRES_MY_PROGRAM";

echo "Criando diretório no pelo endereço absoluto";

mkdir -p $ADDRESS_CREATE_NEW_SOFTWARE;
```


## Criando a condicional que verifica se o arquivo foi de fato criado

```
if (Test-Path -Path $ADDRESS_CREATE_NEW_SOFTWARE) {


}
else {
    # Lança uma exception de que algum problema aconteceu
    throw "Houve um problema ao criar o diretório"
}
```


## Criando o código que copia o programa da fonte para onde tem que estar e o executa

```
if (Test-Path -Path $ADDRESS_CREATE_NEW_SOFTWARE) {

    echo "Executando cópia"

    cp $ADDRES_MY_PROGRAM $ADDRESS_CREATE_NEW_SOFTWARE

    echo "start no programa"

    cd $ADDRESS_CREATE_NEW_SOFTWARE;

    Invoke-Expression $NOME_DO_PROGRAMA_EXECUCAO;
}
```