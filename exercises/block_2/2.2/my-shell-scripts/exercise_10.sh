#!/bin/bash
#Renomeia todos os arquivos do diretório atual que terminam em ".png"

  DAY=$(date +%F)

  for FILE in `ls *.png`
   do
      mv $FILE ${DAY}-${FILE}
   done



