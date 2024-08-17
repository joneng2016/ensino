# Exercícios de Criação de Tabelas

## Exercício 1: Criar Tabela de Livros
Crie uma tabela chamada `Livros` com as seguintes colunas:
- `LivroID` do tipo INT.
- `Titulo` do tipo VARCHAR(200).
- `Autor` do tipo VARCHAR(150).
- `AnoPublicacao` do tipo YEAR.

## Exercício 2: Criar Tabela de Clientes
Crie uma tabela chamada `Clientes` com as seguintes colunas:
- `ClienteID` do tipo INT.
- `Nome` do tipo VARCHAR(100).
- `Email` do tipo VARCHAR(100).
- `Telefone` do tipo VARCHAR(15).

## Exercício 3: Criar Tabela de Pedidos
Crie uma tabela chamada `Pedidos` com as seguintes colunas:
- `PedidoID` do tipo INT.
- `ClienteID` do tipo INT.
- `DataPedido` do tipo DATE.
- `ValorTotal` do tipo DECIMAL(10, 2).

## Exercício 4: Criar Tabela de Funcionários
Crie uma tabela chamada `Funcionarios` com as seguintes colunas:
- `FuncionarioID` do tipo INT.
- `Nome` do tipo VARCHAR(100).
- `Cargo` do tipo VARCHAR(50).
- `Salario` do tipo DECIMAL(12, 2).

## Exercício 5: Criar Tabela de Cursos
Crie uma tabela chamada `Cursos` com as seguintes colunas:
- `CursoID` do tipo INT.
- `NomeCurso` do tipo VARCHAR(100).
- `Duracao` do tipo INT (em horas).
- `Descricao` do tipo TEXT.

## Exercício 6: Criar Tabela de Produtos
Crie uma tabela chamada `Produtos` com as seguintes colunas:
- `ProdutoID` do tipo INT.
- `NomeProduto` do tipo VARCHAR(150).
- `Categoria` do tipo VARCHAR(50).
- `Preco` do tipo DECIMAL(8, 2).

## Exercício 7: Criar Tabela de Eventos
Crie uma tabela chamada `Eventos` com as seguintes colunas:
- `EventoID` do tipo INT.
- `NomeEvento` do tipo VARCHAR(100).
- `DataEvento` do tipo DATE.
- `Localizacao` do tipo VARCHAR(255).

## Exercício 8: Criar Tabela de Fornecedores
Crie uma tabela chamada `Fornecedores` com as seguintes colunas:
- `FornecedorID` do tipo INT.
- `NomeFornecedor` do tipo VARCHAR(150).
- `Endereco` do tipo VARCHAR(255).
- `Telefone` do tipo VARCHAR(15).

## Exercício 9: Criar Tabela de Alunos
Crie uma tabela chamada `Alunos` com as seguintes colunas:
- `AlunoID` do tipo INT.
- `Nome` do tipo VARCHAR(100).
- `DataNascimento` do tipo DATE.
- `Curso` do tipo VARCHAR(100).

## Exercício 10: Criar Tabela de Transações
Crie uma tabela chamada `Transacoes` com as seguintes colunas:
- `TransacaoID` do tipo INT.
- `ClienteID` do tipo INT.
- `DataTransacao` do tipo DATETIME.
- `Valor` do tipo DECIMAL(10, 2).


# Exercícios sobre o Comando `ALTER TABLE`

## Exercício 11: Alterar Tabela de Livros
- Adicione uma nova coluna chamada `Editora` do tipo `VARCHAR(100)` à tabela `Livros`.

## Exercício 12: Alterar Tabela de Clientes
- Modifique a coluna `Telefone` na tabela `Clientes` para permitir até 20 caracteres e adicione uma coluna `Endereco` do tipo `VARCHAR(255)`.

## Exercício 13: Alterar Tabela de Pedidos
- Altere o tipo de dado da coluna `ValorTotal` na tabela `Pedidos` para `DECIMAL(12, 2)`, e adicione uma coluna `Status` do tipo `VARCHAR(20)`.

## Exercício 14: Alterar Tabela de Funcionários
- Renomeie a coluna `Cargo` para `Departamento` na tabela `Funcionarios` e adicione uma nova coluna chamada `DataContratacao` do tipo `DATE`.

## Exercício 15: Alterar Tabela de Cursos
- Adicione uma coluna chamada `Nivel` do tipo `VARCHAR(50)` à tabela `Cursos`, e modifique a coluna `Descricao` para aumentar seu tamanho para `TEXT`.

## Exercício 16: Alterar Tabela de Produtos
- Remova a coluna `Categoria` da tabela `Produtos` e adicione uma nova coluna chamada `Estoque` do tipo `INT`.

## Exercício 17: Alterar Tabela de Eventos
- Modifique o tipo de dado da coluna `Localizacao` para `TEXT` e adicione uma nova coluna chamada `Capacidade` do tipo `INT`.

## Exercício 18: Alterar Tabela de Fornecedores
- Renomeie a coluna `Endereco` para `EnderecoFornecedor` e adicione uma nova coluna `Email` do tipo `VARCHAR(100)`.

## Exercício 19: Alterar Tabela de Alunos
- Adicione uma coluna chamada `Endereco` do tipo `VARCHAR(255)` à tabela `Alunos` e modifique a coluna `Curso` para permitir até 150 caracteres.

## Exercício 20: Alterar Tabela de Transações
- Adicione uma coluna `MetodoPagamento` do tipo `VARCHAR(50)` à tabela `Transacoes` e modifique a coluna `DataTransacao` para `TIMESTAMP`.

# Exercícios sobre o Comando `DROP TABLE`

## Exercício 21: Remover Tabela de Funcionários
Suponha que você tenha uma tabela chamada `Funcionarios` no seu banco de dados. Escreva o comando `DROP TABLE` para remover completamente essa tabela e todos os dados que ela contém.

## Exercício 22: Remover Tabela de Pedidos
Você possui uma tabela chamada `Pedidos` que não é mais necessária no seu banco de dados. Escreva o comando `DROP TABLE` para excluir a tabela `Pedidos` e garantir que todos os registros e a estrutura da tabela sejam removidos do banco de dados.
