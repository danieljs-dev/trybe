#!/bin/bash 
#Pede ao usuário um caminho de arquivo ou diretório e, em seguida, imprime na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo.

echo "Digite aqui o seu arquivo ou diretório"

read DIGITE

if [ -f "$DIGITE" ]
    then
        echo "$DIGITE é um arquivo comum"
elif [ -d "$DIGITE" ]
    then
        echo "$DIGITE é um diretório"
else 
        echo "$DIGITE é um outro tipo de arquivo"

fi
listagem=$DIGITE
ls -l $listagem




