#!/bin/sh

echo "INÍCIO DO PROGRAMA\n";

#declara as variávies principais
NOME_DO_PROGRAMA="servidor-linux"
ADDRES_MY_PROGRAM="/home/www/ensino/laboratorio_de_hardware_sistemas_operacionais/scripts/apoio_script2/servidor-linux";
ADDRESS_CREATE_NEW_SOFTWARE="/servers/server-http"


cd ~;

echo "ENDEREÇO SERVIDOR HTTP ARMAZENADO NESTA VARIÁVEL";
echo  "$ADDRES_MY_PROGRAM \n";

echo "Criando diretório no pelo endereço absoluto";

mkdir -p "$ADDRESS_CREATE_NEW_SOFTWARE"

echo "Verificando os diretórios foram criados";

if [ -d "$ADDRESS_CREATE_NEW_SOFTWARE" ]; then
    echo "Diretório foi criado com sucesso";
else
    echo "Diretório não existe";
fi


echo "Inciando o procesos de cópia do arquivo de:";
echo "$ADDRES_MY_PROGRAM para";
echo "$ADDRESS_CREATE_NEW_SOFTWARE para";

cp "$ADDRES_MY_PROGRAM" "$ADDRESS_CREATE_NEW_SOFTWARE"


echo "subindo o arquivo"

"$ADDRESS_CREATE_NEW_SOFTWARE/$NOME_DO_PROGRAMA"