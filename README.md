# TCC
Trabalho de conclusão de curso pela Universidade Municipal de São Caetano do Sul.

###PARA RODAR A APLICAÇÃO###

1) Baixe o Visual Studio Code
2) Baixe e utilize o Node.Js versão LTS
3) Baixe o MySql Workbench
4) Baixe o XAMPP
5) Faça o download ZIP do projeto e descompacte na pasta C:
6) Abra o CMD (Prompt de Comando) como adminstrador e navegue até a pasta raiz do projeto clonado e execute o comando "npm install express".

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/3706f6be-57ad-4101-baea-b8c4d5c4a236)

7) Após o comando se aparecer algo igual à:

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/d1e4bc37-b234-4835-a3c7-f60aa5afeb6a)

ou

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/eed648b6-5275-4c92-ad2e-360553b26826)

Não se preocupe, siga os passos.

8) Após isso execute o comando "cd my-locker" para acessar a pasta do front-end e execute o comando "npm install express".
![image](https://github.com/gmmanssur/GuardianX/assets/66757229/36c19c38-7d5d-40fd-a3a0-54e274c4d96a)
9) Dependendo da máquina a instalação pode ser feita mais rápida dependendo das biblotecas já instaladas.
10) Seguindo as mesmas condições do item 7.
11) Após executar e instalar execute o comando "npm start".
![image](https://github.com/gmmanssur/GuardianX/assets/66757229/1479549d-7620-4fad-816e-c980136f650b)
(Não se preocupe com os warnings, pois estão relacionados a definições que não foram usadas, como na imagem)
12) Abre outro CMD, navegue até a pasta raiz do projeto GuardianX-main e acesse a pasta backend:

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/c7f520cf-c05b-48f2-bd16-b83fb934c1db)
13) Execute o comando npm install express e depois o comando "npm run dev"

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/cca7b180-532e-4f45-a4d5-60d0b8751fa7)

14) Seguindo sempre o que foi dito no item 7.
15) Abra o XAMPP e starta o MySql

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/4f516b61-2018-4321-b816-b75b600de101)
16) Abra o MySql e clique no + para criar uma conexão.

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/064a6164-ba95-431b-9a46-4d364f9005ca)

17) Configure conforme a imagem a seguir:

![image](https://github.com/gmmanssur/GuardianX/assets/66757229/f5f3e9a9-03d6-400d-b5b2-c2a71b83d3f9)

18) Crie um database chamado "myLocker" e seta como default.
19) Crie as seguintes tabelas:

CREATE TABLE usuarios (
    IdUsuario bigint primary key AUTO_INCREMENT,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL
)

CREATE TABLE usuarioDados (
    IdDadosUsuario bigint not null primary key AUTO_INCREMENT,
    IdUsuario bigint not null,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    cpf varchar(11) not null
)

20) PRONTO! Foi aberto uma aba no navegador na página de login da aplicação.





