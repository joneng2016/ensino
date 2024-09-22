# Exercício: Documentação de Arquitetura de um Sistema de Gestão de Biblioteca

## Objetivo
Documentar a arquitetura de um sistema de software simples, aplicando os conceitos aprendidos em aula.

## Descrição do Sistema
Você deve documentar a arquitetura de um **Sistema de Gestão de Biblioteca**. Esse sistema permitirá que bibliotecários gerenciem o acervo de livros, cadastrem novos títulos, realizem empréstimos e retornos de livros, e mantenham o controle dos usuários (alunos, professores, funcionários) que utilizam a biblioteca.

## Requisitos do Sistema
- O sistema deve ter uma interface de usuário (UI) que permita aos bibliotecários e usuários acessar e gerenciar os livros.
- O backend será responsável por processar as requisições da UI, conectar-se ao banco de dados e lidar com a lógica de negócios (como empréstimos e retornos).
- O banco de dados armazenará informações sobre livros, usuários e transações de empréstimos.
- Haverá integração com um serviço externo de notificações para enviar alertas sobre devoluções pendentes ou atrasos.

## Tarefas

### 1. Visão Geral do Sistema
- Descreva a visão geral do sistema de gestão de biblioteca. O que ele faz e quais são suas funcionalidades principais?

### 2. Componentes e Módulos
- Liste os principais componentes do sistema:
  - Interface do usuário (Frontend).
  - API/Backend.
  - Banco de dados.
  - Serviço de notificações.
- Explique o papel de cada componente e como eles interagem entre si.

### 3. Interações entre Componentes
- Descreva como o frontend se comunica com o backend (ex: via requisições HTTP/REST).
- Explique como o backend se comunica com o banco de dados e com o serviço de notificações.
- Utilize um diagrama de sequência ou diagrama de fluxo de dados (opcional) para ilustrar o fluxo de uma operação de empréstimo de livro.

### 4. Decisões Arquiteturais (ADR)
- Documente uma decisão arquitetural importante que você tomou para este sistema. Por exemplo:
  - A escolha de usar uma arquitetura monolítica ou baseada em microsserviços.
  - A escolha de frameworks para o frontend (React, Angular) e backend (Node.js, Spring Boot).
  - A decisão de integrar um serviço externo de notificações.

### 5. Requisitos Não Funcionais
- Liste os requisitos não funcionais mais importantes para este sistema:
  - Desempenho (ex: o sistema deve suportar até 1000 usuários simultâneos).
  - Segurança (ex: autenticação de usuários via OAuth).
  - Escalabilidade (ex: o sistema deve ser capaz de adicionar novos módulos no futuro, como gestão de reservas).

## Entrega
- Prepare um documento de 2 a 3 páginas com as respostas para as tarefas acima.
- Inclua diagramas para representar a interação entre componentes (opcional, mas recomendado).
- Explique todas as suas escolhas de forma clara e justificada.

## Critérios de Avaliação
- **Clareza:** A documentação está clara e compreensível para desenvolvedores e partes interessadas?
- **Completude:** Todos os componentes do sistema foram abordados? As interações foram explicadas corretamente?
- **Justificativas:** As decisões arquiteturais são bem fundamentadas e justificadas?
- **Diagramação:** O uso de diagramas (se aplicável) facilita o entendimento das interações no sistema?
