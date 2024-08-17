# Exercícios sobre Cardinalidade

## Exercício 0: Identificação de Cardinalidade

**Contexto:**

Você está projetando um banco de dados para uma biblioteca. No modelo conceitual, você identificou duas entidades principais: `Autor` e `Livro`. Um autor pode escrever vários livros, mas cada livro é escrito por apenas um autor.

**Tarefas:**

1. **Desenhe o Diagrama Entidade-Relacionamento (ER):** 
   - Inclua as entidades `Autor` e `Livro`.
   - Mostre a relação entre essas entidades.
   - Identifique e indique a cardinalidade entre `Autor` e `Livro`.

2. **Responda às Perguntas:**
   - Qual é a cardinalidade entre `Autor` e `Livro`?
   - Como você representaria essa cardinalidade em um modelo relacional?

**Dicas:**
- Lembre-se de que a cardinalidade descreve o número de instâncias de uma entidade que podem estar associadas a uma instância de outra entidade.


# Exercícios sobre Normalização

## Exercício 1: Identificação da Primeira Forma Normal (1NF)

**Contexto:**

Você tem a seguinte tabela de um sistema de pedidos de uma loja:

**Tabela Pedidos**

| PedidoID | Cliente   | Produtos          |
|----------|-----------|--------------------|
| 1        | João Silva| ProdutoA, ProdutoB |
| 2        | Maria Souza| ProdutoC          |

**Tarefas:**

1. **Identifique se a tabela está em 1NF:**
   - Verifique se todos os atributos contêm valores atômicos.
   - Identifique se há colunas que contêm múltiplos valores.

2. **Transforme a tabela para a 1NF se necessário:**
   - Crie novas tabelas conforme necessário para garantir que a tabela esteja em 1NF.

---

## Exercício 2: Transformação para a Segunda Forma Normal (2NF)

**Contexto:**

Você tem a seguinte tabela em 1NF para um sistema de pedidos:

**Tabela Pedidos**

| PedidoID | Cliente   | Produto   | Quantidade | NomeVendedor |
|----------|-----------|-----------|------------|--------------|
| 1        | João Silva| ProdutoA  | 10         | Ana          |
| 1        | João Silva| ProdutoB  | 5          | Ana          |
| 2        | Maria Souza| ProdutoC | 3          | Pedro        |

**Tarefas:**

1. **Identifique se a tabela está em 2NF:**
   - Verifique se todos os atributos não-chave são totalmente dependentes da chave primária.

2. **Transforme a tabela para 2NF se necessário:**
   - Crie novas tabelas e ajuste as chaves primárias e estrangeiras conforme necessário.

---

## Exercício 3: Normalização para a Terceira Forma Normal (3NF)

**Contexto:**

Você tem a seguinte tabela em 2NF para um sistema de gerenciamento de vendas:

**Tabela Vendas**

| VendaID | ClienteID | ProdutoID | Quantidade | NomeCliente | EnderecoCliente |
|---------|-----------|-----------|------------|-------------|-----------------|
| 1       | 1         | 101       | 5          | João Silva  | Rua A           |
| 2       | 2         | 102       | 3          | Maria Souza | Rua B           |

**Tarefas:**

1. **Identifique se a tabela está em 3NF:**
   - Verifique se todos os atributos não-chave são diretamente dependentes da chave primária.

2. **Transforme a tabela para 3NF se necessário:**
   - Crie novas tabelas para remover dependências transitivas e ajuste as chaves primárias e estrangeiras.

---

## Exercício 4: Análise de Tabela em 1NF, 2NF e 3NF

**Contexto:**

Você tem a seguinte tabela para um sistema de gestão de funcionários:

**Tabela Funcionarios**

| FuncionarioID | Nome      | Departamento | DepartamentoLocal |
|---------------|-----------|--------------|-------------------|
| 1             | Ana Costa | TI           | Sala 101          |
| 2             | Luis Silva | RH          | Sala 102          |
| 3             | Carla Santos | TI         | Sala 101          |

**Tarefas:**

1. **Analise se a tabela está em 1NF:**
   - Determine se todos os atributos têm valores atômicos.

2. **Verifique se a tabela está em 2NF:**
   - Identifique se todos os atributos não-chave são totalmente dependentes da chave primária.

3. **Verifique se a tabela está em 3NF:**
   - Certifique-se de que todos os atributos não-chave são diretamente dependentes da chave primária e não de outros atributos não-chave.

4. **Normalização da Tabela:**
   - Se a tabela não estiver em 1NF, 2NF ou 3NF, crie novas tabelas e defina chaves primárias e estrangeiras conforme necessário.


## Exercício 5

# Exercício: Transformação de Modelo Conceitual para Modelo Lógico

## Contexto

Você recebeu um modelo conceitual para um novo sistema de gerenciamento de biblioteca. Sua tarefa é transformar esse modelo conceitual em um modelo lógico que possa ser implementado em um banco de dados relacional.

## Modelo Conceitual

O Diagrama Entidade-Relacionamento (ER) conceitual inclui as seguintes entidades e relacionamentos:

1. **Entidades e Atributos:**
   - **Livro**: 
     - `LivroID` (Chave Primária)
     - `Titulo`
     - `Autor`
     - `AnoPublicacao`
   
   - **Autor**: 
     - `AutorID` (Chave Primária)
     - `Nome`
     - `Nascimento`
   
   - **Empréstimo**:
     - `EmprestimoID` (Chave Primária)
     - `DataEmprestimo`
     - `DataDevolucao`
   
   - **Leitor**:
     - `LeitorID` (Chave Primária)
     - `Nome`
     - `Telefone`
     - `Email`
   
2. **Relacionamentos:**
   - **Escreve**: Um relacionamento entre `Autor` e `Livro`. Um autor pode escrever vários livros, e cada livro é escrito por um único autor.
   - **Empresta**: Um relacionamento entre `Leitor` e `Empréstimo`. Um leitor pode emprestar vários livros e um empréstimo está associado a um único leitor.
   - **Inclui**: Um relacionamento entre `Empréstimo` e `Livro`. Um empréstimo pode incluir vários livros, e cada livro pode estar em vários empréstimos.

## Tarefas

1. **Identifique Entidades e Relacionamentos:**
   - Liste as entidades e seus atributos com base no modelo conceitual fornecido. Identifique também os relacionamentos entre essas entidades.

2. **Crie Tabelas e Defina Atributos:**
   - Converta cada entidade em uma tabela e defina as colunas com base nos atributos da entidade. Indique as chaves primárias para cada tabela.
   
   **Exemplo:**
   - Tabela `Livro`: `LivroID`, `Titulo`, `AutorID`, `AnoPublicacao`
   - Tabela `Autor`: `AutorID`, `Nome`, `Nascimento`
   - Tabela `Leitor`: `LeitorID`, `Nome`, `Telefone`, `Email`
   - Tabela `Emprestimo`: `EmprestimoID`, `LeitorID`, `DataEmprestimo`, `DataDevolucao`
   
3. **Defina Relacionamentos e Chaves Estrangeiras:**
   - Converta os relacionamentos do modelo conceitual em chaves estrangeiras nas tabelas apropriadas. Crie tabelas de junção se necessário para representar relacionamentos muitos-para-muitos.

   **Exemplo:**
   - Na tabela `Livro`, adicione a coluna `AutorID` como chave estrangeira referenciando `AutorID` na tabela `Autor`.
   - Na tabela `Emprestimo`, adicione a coluna `LeitorID` como chave estrangeira referenciando `LeitorID` na tabela `Leitor`.
   - Crie uma tabela de junção `EmprestimoLivro` para o relacionamento muitos-para-muitos entre `Empréstimo` e `Livro`.

4. **Documente o Modelo Lógico:**
   - Descreva as tabelas, colunas e chaves estrangeiras no modelo lógico resultante. Explique como as tabelas se relacionam e como os dados serão armazenados e acessados.


5. **Reveja o Modelo Lógico:**
   - Verifique se todas as entidades, atributos e relacionamentos foram corretamente transformados e se a integridade dos dados está garantida.

## Resolução

Forneça o modelo lógico transformado com base nas respostas fornecidas. Discuta quaisquer decisões tomadas e explique a lógica por trás da transformação.
