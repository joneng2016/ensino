# Introdução ao DDL (Data Definition Language)

## Introdução ao DDL

- No contexto de bancos de dados relacionais, a Data Definition Language (DDL) é um subconjunto da SQL utilizado para definir, modificar e remover a estrutura dos objetos de um banco de dados.
- O DDL é responsável pela criação e manutenção da estrutura do banco de dados, incluindo tabelas, índices e relacionamentos entre eles.

## Comando `CREATE`

- O comando **`CREATE`** é utilizado para criar novos objetos no banco de dados, como tabelas e índices.
- Exemplo: Para criar uma tabela chamada `Alunos` com duas colunas, `ID` e `Nome`, você utiliza o comando `CREATE TABLE`.

## Comando `ALTER`

- O comando **`ALTER`** é usado para modificar a estrutura de um objeto existente. Isso pode incluir a adição ou remoção de colunas de uma tabela ou a modificação do tipo de dados de uma coluna.
- Exemplo: Para adicionar uma nova coluna chamada `DataNascimento` à tabela `Alunos`, você utiliza o comando `ALTER TABLE`.

## Comando `DROP`

- O comando **`DROP`** é utilizado para remover um objeto do banco de dados, como uma tabela ou um índice, juntamente com todos os seus dados.
- Exemplo: Para remover completamente a tabela `Alunos` e todos os dados que ela continha, você utiliza o comando `DROP TABLE`.

## Comando `TRUNCATE`

- O comando **`TRUNCATE`** é usado para remover todos os registros de uma tabela, mas mantém a estrutura da tabela para novos dados.
- Exemplo: Para remover todos os registros da tabela `Alunos`, mantendo sua estrutura para novos dados, você utiliza o comando `TRUNCATE TABLE`.

## Conclusão

- A Data Definition Language (DDL) é fundamental para a gestão e estruturação de bancos de dados relacionais.
- Com comandos como `CREATE`, `ALTER`, `DROP` e `TRUNCATE`, você pode definir e modificar a estrutura dos dados conforme necessário.

---

# Comando `CREATE TABLE`

## Introdução

- O comando `CREATE TABLE` é uma das principais instruções na SQL usada para definir uma nova tabela em um banco de dados relacional.
- Ele permite a criação de tabelas que servirão como a estrutura fundamental para armazenar dados.

## Objetivo

- A principal função do `CREATE TABLE` é estabelecer a estrutura da tabela, especificando o nome da tabela, as colunas e os tipos de dados para cada coluna.
- Além disso, o comando define as restrições e chaves necessárias, como chaves primárias e estrangeiras, para garantir a integridade dos dados.

## Componentes Principais

- **Nome da Tabela**: Define o nome da nova tabela que será criada no banco de dados.
- **Colunas**: Especifica as colunas que a tabela terá, incluindo os nomes e os tipos de dados de cada coluna.
- **Tipos de Dados**: Define o tipo de dados que cada coluna pode armazenar, como inteiros, textos ou datas.
- **Restrições**: Inclui definições adicionais como chaves primárias, chaves estrangeiras, valores únicos e regras de integridade referencial.

## Considerações Importantes

- **Nome da Tabela**: Deve ser único dentro do banco de dados e seguir as convenções de nomenclatura.
- **Tipos de Dados**: Deve ser escolhido com base no tipo de informações que a coluna irá armazenar, garantindo eficiência e precisão no armazenamento.
- **Restrições**: Deve ser configurado para manter a integridade dos dados e garantir que as regras de negócios sejam respeitadas.

## Exemplo

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
## DROP TABLE

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


