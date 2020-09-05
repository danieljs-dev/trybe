#!/bin/bash
#Recebe o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro).

  DIRECTORY=$1
  EXTENSION=$2

  DAY=$(date +%F)

  cd $DIRECTORY

  for FILE in `ls *.$EXTENSION`
   do
      echo "Renomeando $FILE para ${DAY}-${FILE}"
      mv $FILE ${DAY}-${FILE}
   done




