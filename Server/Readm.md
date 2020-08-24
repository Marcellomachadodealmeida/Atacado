
1) primeiro passo é  criar um package.json >>>  yarn init -y

2) intele  typescript  >>>> yarn add typescript -D


3)criar um arquivo de configuração do  typescript >>>> yarn tsc --init

dentro do arquivo criado , altere de es5 para es2017

obs: o terceiro passo já está feito

cria em package.json um scrips e coloque dentro : 
"start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts",
"knex:migrate": "knex --knexfile knexfile.ts migrate:latest"

4)instale o express 

5) instale o knex e o sqlite3
  no a extensão Sqlite deve estar istalada também para ter uma visão melhor do BD

6) instale o cors >>>> yarn add cors

7) também deve ser instalado o @types/cors e @types/express  necessário para o código ser lido


nos arquivos não consta as tabelas e o bd
para cria o Bd com as tabelas  use >>>> yarn knex:migrate

para iniciar o sevidor use yarn start


Quanto a criação de novos produtos para as tabelas:

Na page /cadastro os campos "Categoria" e "Marca"  devem ser preenchidos exatamente da mesma forma que consta no Select da page /home


