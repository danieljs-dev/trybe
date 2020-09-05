# Shell Scripts

<!-- ![Logo Shell Script](https://i.ibb.co/YZfZj58/shellscript.png) -->
<!-- <img src="https://i.ibb.co/rct4wWH/shellscript-logo.png" alt="shellscript-logo" border="0" width="300" height="300"> -->
<img src="https://ik.imagekit.io/dtvrrphc6i/shellscript__1__tvNWzJ--2.png" alt="Shell Script">

## Indice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Exercicio 1](#exercicío-1)
- [Exercicio 2](#exercicío-2)
- [Exercicio 3](#exercicío-3)
- [Exercicio 4](#exercicío-4)
- [Exercicio 5](#exercicío-5)
- [Exercicio 6](#exercicío-6)
- [Exercicio 7](#exercicío-7)
- [Exercicio 8](#exercicío-8)
- [Exercicio 9](#exercicío-9)
- [Exercicio 10](#exercicío-10)
- [Exercicio 11](#exercicío-11)

## Sobre

O projeto **Shell Script** foi criado dentro do curso da **Trybe** com o intuito de colocarmos em prática todo conteúdo estudado durante o módulo shell script.

---

## Tecnologias utilizadas

Os projetos foram desenvolvidos utilizando as seguintes tecnologias

- [Bash](https://www.gnu.org/software/bash/)
- [Linux](http://linuxcommand.org/)
- [Shell Script](https://www.shellscript.sh/)

---

### Exercicío 1

Imprime na tela a frase: "Shell Script é demais!"

```
echo "Shell Script é demais!"
```

---

### Exercicío 2

A variável recebe o conteúdo da mensagem: "Shell Script com variáveis é demais!"

```
varShell="Shell Script com variáveis é demais!"

echo $varShell
```

---

### Exercicío 3

Guarda o resultado do comando hostname em uma variável.

```
varHostname=`hostname`

echo "Este script está rodadndo no computador: $varHostname"
```

---

### Exercicío 4

Verifica se o caminho até um arquivo existe ("file path"), e se tem permissão para edita-lo.

```
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
```

---

### Exercicío 5

Pede ao usuário um caminho de arquivo ou diretório e, em seguida, imprime na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo.

```
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
```
---

### Exercicío 6

Aceita o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário.

```
FILE=$1

if [ -f "$FILE" ]
  then
    echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]
  then
    echo "$FILE é um diretório"
else
    echo "$FILE é alguma outra coisa"
fi
ls -l $FILE
```

---

### Exercicío 7

Recebe um diretório como argumento (ou parâmetro), e conta quantos arquivos existem nele.

```
DIRECTORY=$1
if [ -d "$DIRECTORY" ]
    then
        FILES=`ls -l $DIRECTORY | wc -l`
            echo "O $DIRECTORY tem $FILES arquivos."
    else
            echo "O argumento $DIRECTORY não é um diretório!"
fi
```

---

### Exercicío 8

Imprime as palavras da variável na tela, uma palavra por linha.

```
WORDS="shell script usando estrutura repetição for terminal"
for WORD in $WORDS
    do  
        echo $WORD
done
```

---

### Exercicío 9

Aceita uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

```
FILES=$*

  for FILE in $FILES
    do
      if [ -f "$FILE" ]
        then
          echo "$FILE é um arquivo comum"
      elif [ -d "$FILE" ]
        then
          echo "$FILE é um diretório"
      else
          echo "$FILE é alguma outra coisa"
      fi
      ls -l $FILE
    done
```

---

### Exercicío 10

Renomeia todos os arquivos do diretório atual que terminam em ".png"

```
DAY=$(date +%F)

   for FILE in `ls *.png`
      do
         mv $FILE ${DAY}-${FILE}
done
```

---

### Exercicío 11

Recebe o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro).

```
DIRECTORY=$1
EXTENSION=$2

DAY=$(date +%F)

cd $DIRECTORY

   for FILE in `ls *.$EXTENSION`
      do
         echo "Renomeando $FILE para ${DAY}-${FILE}"
            mv $FILE ${DAY}-${FILE}
done
```

---

Desenvolvido por Daniel Jesus de Souza
