#!/bin/bash 
#Verifica se o caminho até um arquivo existe ("file path"), e se tem permissão para editar.

DIRETORIO=`pwd`
echo "Digite aqui o diretório ou arquivo: "
read ARQUIVO

if [ -e $ARQUIVO ] 
then
    echo "o caminho $DIRETORIO está habilitado!"
else
    echo "o caminho $DIRETORIO não está habilitado"
fi 
if [ -w $ARQUIVO ]
then
    echo "Você tem permissão para editar $ARQUIVO"
else 
    echo "Você NÃO foi autorizado a editar $ARQUIVO"
fi

