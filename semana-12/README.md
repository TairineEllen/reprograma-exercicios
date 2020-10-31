# Semana 12 - Introdução ao banco de dados

#### Banco de Dados

Um banco de dados é um conjunto de informações organizadas e relacionadas que são tratadas como uma unidade. As coleções organizadas de dados se relacionam de forma a criar alguma sentido, dando mais eficiência durante a pesquisa.

#### Sistema Gerenciador de Banco de Dados

Representados pela sigla SGBD, um sistema gerenciador de banco de dados ´o programa responsável pelo controle de acesso dos usuários à base de dados, assim como o controle de armazenamento, alteração e recuperação dos dados.

Alguns softwares existentes no mercado são:
- MySQL
- Microsoft SQL Server 
- MongoDB
- PostreSQL

#### Banco de Dados Relacional x Banco de Dados Não-Relacional

No banco de dados relacional, todas as tabelas, índices, consultas, relatórios e códigos são armazenados em um único arquivo. Esse tipo de banco se caracteriza por ter um grupo de tabelas interligadas.
No banco de dados não-relacional, os dados são representados por coleções de documentos JSON.

### MongoDB

O MongoDB é um banco de dados orientado a documentos, ou seja, o banco lida com documentos e não com registros como no modelo relacional onde tudo é representado usando uma abordagem bidimensional (tabelas).

Suas principais características são possuir código aberto, ser de alta performance, não possuir tabelas e ser formado por um conjunto de arquivos JSON.

#### Vantagens

Uma das principais vantagens de utilizar o MongoDB é o fato de podermos representar objetos do mundo real da forma que eles são e, casos surjam novos atributos, pode-se aplicá-los somente onde são necessários, evitando atualizar todas as entradas do banco de dados.
Outra vantagem é possuir consultas simples de serem realizadas, pois não existem transações e joins como nos bancos de dados relacionais.

O MongoDB possui consultas bastantes simples de serem realizadas, visto que não existem transações e joins. As consultas são mais fáceis de escrever e mais fáceis de ajustar.

#### Alguns comandos


|  Comando | Função   |
| ------------ | ------------ |
| show databases | Exibir bancos de dados existentes|
| use nome_banco  | Criar novo banco de dados ou selecionar banco de dados existente   |
| db.dropDatabase() | Remover banco de dados atual |
| show collections | Exibir collections existentes |
| db.createCollection("nome_collection") | Criar nova collection |
| db.nome_collection.find() | Buscar todos os registros da collection |
| db.nome_collection.find().pretty() | Apresentar resultados da busca de forma organizada|
| db.nome_collection.findOne() | Retorna apenas um registro da collection |
| db.nome_collection.insertOne({"registro": "valor"}) | Inserir um registro na collection |
| db.nome_collection.insertMany([{"registro1": "valor1"}, {"registro2": "valor2"}]) | Inserir mais de um registro na collection |
| db.nome_collection.find({"atributo1": "valor1"}) | Buscar registro que respeite um determinado atributo |
| db.nome_collection.find({"atributo1": "valor1", "atributo2": "valor2"}) | Buscar registro que respeite dois atributos ao mesmo tempo |
| db.nome_collection.find({$or: [{"atributo1": "valor1"}, {"atributo2": "valor2"}]}) | Buscar registro que respeite um ou outro atributo |
| db.nome_collection.find().limit(x) | Limitar para x resultados encontrados na busca |

##### Fontes:
- Material da aula
- [Qual a diferença entre base de dados relacional e não relacional?](https://debugeverything.com/diferenca-base-de-dados-relacional-e-nao-relacional/#:~:text=Bancos%20de%20dados%20relacionais%20como,em%20cole%C3%A7%C3%B5es%20de%20documentos%20JSON. "Qual a diferença entre base de dados relacional e não relacional?")
- [Introdução ao MongoDB](https://www.devmedia.com.br/introducao-ao-mongodb/30792 "Introdução ao MongoDB")
