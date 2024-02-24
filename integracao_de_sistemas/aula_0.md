# Aula 01 - Introdução

Avaliação das diversas possibilidades de arquitetura das soluções de software. Criação de soluções computacionais distribuídas e integração de sistemas de diferentes plataformas.

## Egresso será capaz

* Desenvolver sistemas computacionais, identificando problemas da sociedade que tenham solução algorítmica, utilizando ferramentas, metodologias e ambientes de programação, considerando os limites da computação e as dimensões quantitativas do problema.

* Gerir, durante a vida profissional, sua própria aprendizagem e desenvolvimento, buscando novos conhecimentos de forma autônoma, incluindo autogestão de tempo, competências e adequação rápida às mudanças tecnológicas e aos novos ambientes de trabalho;

* O aluno será capaz de desenvolver aplicações com uma linguagem orientada a objetos utilizando conceitos de classes, objetos, abstração, herança, encapsulamento e polimorfismo. O aluno estará apto a utilizar componentes básicos da linguagem Java (pacote java.lang) e tratar corretamente os possíveis erros da aplicação via tratamento de exceções. Também será capaz de entender e aplicar os conceitos de interface e coleções, fundamentais para construção de aplicações modernas.

## Objetivos de aprendizagem 

* MVC
* Microsserviços
* Clean Architecture
* Refatoração de código legado
* Arquiteturas de software modernas

## Avaliação

* A1: Apresentação do projeto - 2.0 pontos + Prova escrita bimestral - 3.0 pontos
* A2: Defesa de código - 5.0 pontos


## Planejamento da Disciplina

* 26/02 - Apresentação da disciplina, configuração do ambiente e exercícios.

* 04/03 - Criação de uma API no modelo MVC
* 11/03 - Criação de uma API no modelo MVC
* 18/03 - Refatoração de uma API no modelo MVC
* 25/03 - Criação de uma API com padrões modernos
* 31/03 - Criação de uma API com padrões modernos

* 08/04 - Consumo de APIs externas
* 15/04 - Consumo de APIs externas
* 22/04 - Apresentação do projeto (2,0)
* 29/04 - Prova Bimestral (3,0)

* 06/05 - Integração de sistemas com mensageria
* 13/05 - Integração de sistemas com mensageria
* 20/05 - Integração de sistemas com mensageria
* 27/05 - Teste e monitoria de aplicações integradas
 
* 03/06 - Desenvolvimento do projeto
* 10/06 - Defesa de código (5,0)
* 17/06 - Connect Week
* 24/06 - Semana de Prova ETI

## Plano de Aula

* Criar aplicações com padrões de arquitetura de software, em diferentes linguagens, que suportem a integração entre sistemas.
    * Criação de APIs
    * Web API com C#
    * Web Services em Java
    * API com NodeJs e Express
* Integrar e consumir dados de aplicações de terceiros.
    * APIs eternas
    * Coleta de dados de endereço
    * Coleta de dados de tempo
    * Coleta de dados a partir de longitude e latitude
* Utilizar serviços, bibliotecas, frameworks e padrões de projeto para integrar diferentes tipos de aplicações.
    * Mensageria
    * Apache Kafka
    * RabbitMQ
* Testar e monitorar aplicações integradas a partir de arquiteturas e padrões que possibilitem a integração de software
    * Teste de código
    * Teste de carga
    * Métricas
    * Logging
    * Alertas



## BIBLIOGRAFIA BÁSICA

SILVA, F. R. et al. Cloud computing. Porto Alegre: SAGAH, 2020. <br>
FLANAGAN, D. JavaScript: o guia definitivo. 6. ed. Porto Alegre: Bookman, 2012. <br>
COULOURIS, G.; et al.Sistemas distribuídos. 5. ed. Porto Alegre: Bookman, 2013


## BIBLIOGRAFIA COMPLEMENTAR

MONTEIRO, E. R. et al. DevOps. Porto Alegre: SAGAH, 2021. E-book.<br>
BORDIN, M. V. et al. Processamento paralelo e distribuído. Porto Alegre: SAGAH, 2021.<br>
SOUSA, R. Sistemas distribuídos: princípios e paradigmas. 2. ed. São Paulo: Editora McGraw Hill, 2013.<br>
SCHILDT, H. Java para iniciantes: crie, compile e execute programas Java rapidamente. 6 ed. Porto Alegre: Bookman, 2015. E-book.<br>
FREITAS, P. H. C. et al. Programação Back End III. Porto Alegre: SAGAH, 2021.



## Configurar o ambiente Java

* Ir ao google e digitar "Download java jdk"
* Clicar no link "Java Download"
* Clique em Java archive
* Selecione o Java 21
* Acesse o Windows X64 Installer
* Execute os passos da instalação
* Acesse o disco C:\Arquivo de Programas\Java\jdk...\bin -> copie o endereço
* Em "Este Computador", clique com botão direito, clique em "Propriedades"
* Na parte direita, acesse "Configurações avançadas do sistema"
* Acesse a aba "Avançado"
* Vá em Variávies de Ambiente
* Clique em "Novo"
* Em uma das linhas, clique em "Colar" para Valor da variável e remova o "bin", em nome da variável cole "JAVA_HOME"
* Acesse a variável PATH, clique em editar. Depois clique em Novo, colo o caminho do Java mantendo o /bin
* Acesse o Powershell e digite java - version
* https://www.youtube.com/watch?v=xRBd2l580Ac

## Instalar IntelliJ IDE

* Acesse o Google
* Digite intellij download community edition IDEA
* Baixe a ide community edition
* Instalar

### Instalar Dotnet

* Acesse o google e digite o Dotnet
* Clique em Download
* Em .NET 8.0, clique em "Install .NET..."
* Acesse o powershell e digite --version
* Acesse o VSCode
* 1 -> Instale o C# e o C# kit devtools

### Instalar o Node

* nodejs.org
* Baixar a LTS
* Instalar