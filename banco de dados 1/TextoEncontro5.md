# Introdução ao DDL (Data Definition Language)

No contexto de bancos de dados relacionais, a **Data Definition Language (DDL)**, ou Linguagem de Definição de Dados, é um subconjunto da SQL (Structured Query Language) que é utilizado para definir, modificar e remover a estrutura dos objetos de um banco de dados. Em outras palavras, o DDL é responsável pela criação e manutenção da estrutura do banco de dados, incluindo tabelas, índices, e relacionamentos entre eles.

## Principais Comandos DDL

A DDL inclui comandos que permitem ao administrador do banco de dados (DBA) e aos desenvolvedores criar e alterar a estrutura de um banco de dados. Os comandos mais comuns incluem:

- **`CREATE`**: Usado para criar novos objetos no banco de dados. Por exemplo, para criar uma nova tabela ou um novo índice. 
  - Exemplo: `CREATE TABLE Alunos (ID INT PRIMARY KEY, Nome VARCHAR(100));`

- **`ALTER`**: Usado para modificar a estrutura de um objeto existente. Isso pode incluir adicionar ou remover colunas de uma tabela ou modificar o tipo de dados de uma coluna.
  - Exemplo: `ALTER TABLE Alunos ADD DataNascimento DATE;`

- **`DROP`**: Usado para remover um objeto do banco de dados, como uma tabela ou um índice, e todos os seus dados.
  - Exemplo: `DROP TABLE Alunos;`

- **`TRUNCATE`**: Usado para remover todos os registros de uma tabela, mas mantendo a estrutura da tabela para novos dados.
  - Exemplo: `TRUNCATE TABLE Alunos;`

## Importância do DDL

A utilização da DDL é fundamental para a administração e o gerenciamento eficaz de um banco de dados. Algumas das razões para sua importância incluem:

- **Definição da Estrutura de Dados**: Permite criar e configurar a estrutura necessária para armazenar e organizar dados de forma eficiente.
- **Manutenção e Evolução**: Facilita a modificação da estrutura do banco de dados para atender às mudanças nos requisitos de negócios e tecnológicas.
- **Integridade e Segurança**: Ajuda a definir restrições e regras para garantir que os dados sejam armazenados de forma consistente e segura.

## Considerações

Embora o DDL seja essencial para o gerenciamento de bancos de dados, é importante utilizá-lo com cuidado, especialmente ao realizar operações como `DROP` e `TRUNCATE`, que podem resultar na perda de dados se não forem usadas corretamente. Além disso, a criação e a alteração de estruturas devem ser planejadas adequadamente para garantir que as mudanças não impactem negativamente o desempenho e a integridade do banco de dados.

Em resumo, a Data Definition Language (DDL) é uma ferramenta poderosa e essencial para a definição e manutenção da estrutura de um banco de dados, desempenhando um papel crucial na administração e gerenciamento de sistemas de banco de dados relacionais.

---

# Criando base dados MySQL

# Criação de uma Base de Dados em MySQL

Criar uma base de dados em MySQL é o primeiro passo para começar a gerenciar e armazenar dados. O comando `CREATE DATABASE` é usado para criar uma nova base de dados no MySQL. A sintaxe básica é simples:

```sql
CREATE DATABASE nome_da_base_de_dados;
```
Exemplo:

Para criar uma base de dados chamada LojaOnline, você usaria o seguinte comando:

```sql
CREATE DATABASE LojaOnline;
```

Após criar a base de dados, é necessário selecioná-la antes de criar tabelas e inserir dados. Isso é feito com o comando USE:

```sql
USE LojaOnline;
```

# Comando `CREATE` e Tipagem de Dados no MySQL

O comando **`CREATE`** no MySQL é essencial para a definição e estruturação das tabelas em um banco de dados. Ele é utilizado para criar novas tabelas, definir colunas, e especificar tipos de dados e restrições. Compreender como usar o comando `CREATE` eficazmente, e como os diferentes tipos de dados impactam a criação de tabelas, é crucial para a implementação de um banco de dados eficiente e funcional.

## Comando `CREATE TABLE`

O comando `CREATE TABLE` é usado para criar uma nova tabela no banco de dados. Sua sintaxe básica é:

```sql
CREATE TABLE nome_da_tabela (
    nome_coluna1 tipo_dado1 [restrições],
    nome_coluna2 tipo_dado2 [restrições],
    ...
    [restrições_da_tabela]
);

# Exemplo Básico

Vamos considerar um exemplo básico onde criamos uma tabela chamada `Cliente`:

```sql
CREATE TABLE Cliente (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE,
    DataNascimento DATE,
    Saldo DECIMAL(10, 2)
);
```
## Exemplo de Criação de Tabela

Neste exemplo:

- **`ClienteID`** é uma coluna do tipo `INT` que serve como chave primária, e seu valor é automaticamente incrementado.
- **`Nome`** é uma coluna do tipo `VARCHAR` que pode armazenar strings de até 100 caracteres e não pode ser nula.
- **`Email`** é uma coluna do tipo `VARCHAR` com uma restrição de unicidade, garantindo que cada email seja único na tabela.
- **`DataNascimento`** é uma coluna do tipo `DATE`, armazenando apenas datas.
- **`Saldo`** é uma coluna do tipo `DECIMAL`, adequada para valores monetários com até 10 dígitos no total e 2 casas decimais.

## Tipagem de Dados no MySQL

Os tipos de dados no MySQL determinam o tipo de informações que cada coluna pode armazenar. Abaixo está uma tabela com as principais tipagens de dados e suas características:

| Tipo de Dado  | Descrição                                                        | Exemplo de Uso                                          |
|---------------|------------------------------------------------------------------|---------------------------------------------------------|
| **INT**       | Número inteiro padrão                                            | 123456                                                  |
| **TINYINT**   | Inteiro pequeno                                                  | 0 a 255                                                 |
| **SMALLINT**  | Inteiro pequeno a médio                                          | -32,768 a 32,767                                       |
| **MEDIUMINT** | Inteiro médio                                                    | -8,388,608 a 8,388,607                                 |
| **BIGINT**    | Grande número inteiro                                            | -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 |
| **FLOAT**     | Número com precisão simples                                      | 123.45                                                  |
| **DOUBLE**    | Número com precisão dupla                                       | 123.456789                                              |
| **DECIMAL**   | Número com precisão exata                                        | 1234.56                                                 |
| **CHAR**      | String de comprimento fixo                                       | 'abcdef'                                                |
| **VARCHAR**   | String de comprimento variável                                  | 'texto longo'                                           |
| **TEXT**      | Texto longo (vários tamanhos)                                    | 'Um texto muito longo'                                 |
| **DATE**      | Data no formato 'YYYY-MM-DD'                                      | '2024-08-17'                                            |
| **DATETIME**  | Data e hora no formato 'YYYY-MM-DD HH:MM:SS'                     | '2024-08-17 14:30:00'                                 |
| **TIMESTAMP** | Data e hora com atualização automática                            | '2024-08-17 14:30:00'                                 |
| **TIME**      | Intervalo de tempo no formato 'HH:MM:SS'                          | '14:30:00'                                             |
| **YEAR**      | Ano no formato 'YYYY'                                            | '2024'                                                 |
| **BOOLEAN**   | Valor lógico (alias para TINYINT(1))                              | TRUE ou FALSE                                          |
| **BLOB**      | Dados binários grandes                                           | Arquivos de imagem, vídeos                            |
| **TINYBLOB**  | Dados binários pequenos                                          | Até 255 bytes                                          |
| **MEDIUMBLOB**| Dados binários médios                                           | Até 16 MB                                              |
| **LONGBLOB**  | Dados binários muito grandes                                     | Até 4 GB                                               |
| **ENUM**      | Lista de valores possíveis para uma coluna                       | 'Pequeno', 'Médio', 'Grande'                           |
| **SET**       | Conjunto de valores possíveis, podendo selecionar múltiplos      | 'Red', 'Green', 'Blue' (pode selecionar vários)        |

## Conclusão

O comando `CREATE` é uma ferramenta poderosa no MySQL para a definição da estrutura de um banco de dados, enquanto a tipagem de dados garante que as colunas sejam apropriadas para o tipo de dados que devem armazenar. Compreender a sintaxe do `CREATE TABLE` e os tipos de dados disponíveis é essencial para criar um banco de dados bem projetado e eficiente.


# Comando `DROP TABLE` no MySQL

O comando **`DROP TABLE`** no MySQL é utilizado para excluir uma tabela existente no banco de dados. Quando você executa esse comando, a tabela e todos os seus dados são removidos permanentemente. Isso inclui a exclusão das estruturas de dados, índices e quaisquer restrições associadas à tabela.

## Sintaxe do Comando

A sintaxe básica para usar o comando `DROP TABLE` é a seguinte:

```sql
DROP TABLE nome_da_tabela;
```

## Exemplo Básico

Se você tem uma tabela chamada `Clientes` e deseja removê-la, você pode usar o seguinte comando:

```sql
DROP TABLE Clientes;
```

# Comando `ALTER TABLE` no MySQL

O comando **`ALTER TABLE`** no MySQL é utilizado para modificar a estrutura de uma tabela existente. Ele permite adicionar, excluir ou modificar colunas, além de realizar outras alterações na tabela, como a modificação de índices e a definição de chaves.

## Sintaxe Básica

A sintaxe básica do comando `ALTER TABLE` é:

```sql
ALTER TABLE nome_da_tabela
[ADD | DROP | MODIFY | CHANGE] coluna tipo_dado [restrições];
```

## Operações Comuns com `ALTER TABLE`

## Adicionar Coluna

Para adicionar uma nova coluna a uma tabela existente, use a cláusula `ADD`:

```sql
ALTER TABLE nome_da_tabela
ADD nome_coluna tipo_dado [restrições];
```

## Para remover uma coluna de uma tabela, use a cláusula DROP:

Remover a coluna Telefone da tabela Cliente:

```sql
ALTER TABLE nome_da_tabela
DROP COLUMN nome_coluna;
```

## Modificar Coluna

Para alterar o tipo de dado ou as restrições de uma coluna existente, use a cláusula MODIFY:

```sql
ALTER TABLE nome_da_tabela
MODIFY nome_coluna novo_tipo_dado [novas_restrições];
```

## Renomear Coluna

```sql
ALTER TABLE nome_da_tabela
CHANGE nome_coluna novo_nome_coluna tipo_dado [restrições];
```