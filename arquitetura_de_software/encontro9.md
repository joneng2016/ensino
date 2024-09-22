# Aula: Documentação de Arquitetura de Software

## Objetivo da Aula
Ao final desta aula, os alunos devem ser capazes de:
- Entender a importância da documentação da arquitetura de software.
- Conhecer os principais componentes que compõem a documentação.
- Identificar boas práticas para documentar decisões arquiteturais.
- Aplicar métodos e ferramentas para a criação de uma documentação eficaz.

---

## 1. Introdução à Documentação de Arquitetura de Software
- **Definição:** A documentação de arquitetura de software é o conjunto de informações que descrevem a estrutura de um sistema, seus componentes, suas interações e as decisões que guiaram o design.

- **Objetivo Geral:** Facilitar a comunicação entre as partes envolvidas, apoiar a manutenção e a evolução do sistema, e garantir que as decisões arquiteturais sejam compreensíveis para todas as equipes.

**Pergunta para os Alunos:** 
> Por que você acha que é importante documentar a arquitetura de software, mesmo que a equipe seja pequena e o projeto simples?

---

## 2. Por que Documentar a Arquitetura de Software?
- **Comunicação Clara:** A documentação age como um "ponto de encontro" para desenvolvedores, arquitetos, gerentes de projeto e partes interessadas não técnicas. Ela ajuda a evitar mal-entendidos, garantindo que todos compartilhem a mesma visão sobre o sistema.

- **Manutenção e Evolução:** Sistemas de software estão em constante mudança. Documentação clara facilita o trabalho de novos desenvolvedores ou de equipes de manutenção, reduzindo o risco de erros e retrabalho.

- **Tomada de Decisão:** Decisões arquiteturais importantes, como a escolha de frameworks ou tecnologias, devem ser registradas para fornecer contexto e justificativas para futuras revisões.

- **Conformidade:** Em muitos setores (como financeiro e saúde), há requisitos regulatórios que exigem que a arquitetura seja documentada para auditoria e conformidade.

---

## 3. O que Deve Ser Documentado?
### 1. **Visão Geral do Sistema:**
   - Descreva o propósito do sistema e suas principais funcionalidades.
   - Dê uma visão de alto nível sobre como os componentes do sistema se integram.

### 2. **Componentes e Módulos:**
   - Documente os componentes principais, suas responsabilidades e suas interações.
   - Inclua diagramas como o **Modelo C4** (Context, Container, Component, Code) ou **UML** para representar a estrutura do sistema.

### 3. **Interações entre Componentes:**
   - Explique como os componentes se comunicam (por exemplo, por APIs REST, filas de mensagens, etc.).
   - Utilize diagramas de sequência ou diagramas de fluxo de dados para ilustrar o comportamento dinâmico do sistema.

### 4. **Decisões Arquiteturais (ADR):**
   - Decisões críticas, como o uso de um banco de dados relacional ou a escolha entre uma arquitetura monolítica e microsserviços, devem ser documentadas junto com as justificativas e alternativas consideradas.

### 5. **Requisitos e Restrições:**
   - Especifique os requisitos funcionais e não funcionais (desempenho, escalabilidade, segurança).
   - Descreva restrições técnicas, como a compatibilidade com determinadas plataformas ou a necessidade de integrar com serviços externos.

---

## 4. Como Documentar?
### 4.1. Ferramentas e Formatos
- **Markdown:** Simples e eficaz para documentações textuais.
- **UML (Unified Modeling Language):** Usado para criar diagramas como de classes, sequência, e casos de uso.
- **Modelo C4:** Fornece um conjunto de diagramas que variam de alto nível (contexto do sistema) até detalhes de componentes.
- **Wikis Internos:** Plataformas como Confluence ou GitHub Pages são úteis para manter a documentação centralizada e acessível.

### 4.2. Boas Práticas
- **Consistência:** A documentação deve ser escrita de forma consistente para facilitar o entendimento.
- **Atualização Contínua:** A documentação deve acompanhar as mudanças no software. Se o sistema evolui, a documentação deve refletir essas mudanças.
- **Modularidade:** Documente cada parte do sistema de forma modular e coesa, facilitando a leitura e manutenção.

---

