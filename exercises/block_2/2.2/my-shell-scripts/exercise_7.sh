#!/bin/bash 
#Recebe um diretório como argumento (ou parâmetro), e conta quantos arquivos existem nele.

DIRECTORY=$1
if [ -d "$DIRECTORY" ]
    then
        FILES=`ls -l $DIRECTORY | wc -l`
            echo "O $DIRECTORY tem $FILES arquivos."
    else
            echo "O argumento $DIRECTORY não é um diretório!"
fi




