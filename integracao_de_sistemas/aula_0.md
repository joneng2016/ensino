# Aula 0 - Introdução

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

* A1: Avaliações que consiste na entrega de um código e uma defesa do mesmo em sala de aula
    * Avaliação 1 - 1.25  pontos
    * Avaliação 2 - 1.25  pontos
    * Avaliação 3 - 1.25  pontos
    * Avaliação 4 - 1.25  pontos
* A2: Prova escrtia envolvendo todo o conteúdo do semestre
    * 5.0 pontos


## Planejamento da Disciplina

* 26/02 - Apresentação da disciplina, contrato pedagógico, configuração do ambiente e exercícios.
* 04/03 - Criação de uma API no modelo MVC
    * Exposição
        * Comentar o conceito de ClientSide X ServerSide
        * Processamento de dados em Servidor
        * Trafego de dados na camada TCP/IP
        * Delinear o conceito de uma aplicação
        * Relação entre endpoint e execução lógica
        * Apresenta o conceito de controller dentro do verbo GET
    * Atividade
        * Criar uma api que resolve uma equação do segundo grau
* 11/03 - Criação de uma API no modelo MVC
    * Exposição
        * Descrever o projeto da Avaliação 1
        * Revisar aula 04/03
        * Definir o conceito de Model
        * Configurar Sequelize
        * Apresentar o conceito de GET
        * Apresentar o conceito de POST
    * Atividade
        * Criar uma api envolvendo rotas GET e POST
* 18/03 - Criação de uma API no modelo MVC
    * Exposição
        * Revisãar aula 11/03
        * Apresentar o conceito de PUT
        * Exemplo do conceito de PUT
        * Apresentar o conceito de DELETE
        * Exemplo do conceito de DELETE
    * Atividade
        * Criar uma api envolvendo rotas PUT e DELETE
* 25/03 - Criação de uma API com padrões modernos
    * Exposição
        * Apresentar uma API em Java X SpringBoot
        * Apresentar uma API em .DOTNET 
    * Atividade
        * Criar uma api com uma dessas tecnologias
* 31/03 - Avaliação 1
    * Defesa de código e entrega do documento


* 08/04 - Consumo de APIs externas
    * Exposição
        * Apresentar o conceito de microserviços
        * Start de uma api pronta (feita pelo professor)
        * Mostrar como uma api em Java consome essa outra api
    * Atividade
        Consumir outros endpoints da api feita pelo professor
* 15/04 - Consumo de APIs externas
    * Exposição
        * Descrever o projeto da Avaliação 2
        * Apresentar o conceito de microserviços
        * Start de uma api pronta (feita pelo professor)
        * Mostrar como uma api em C# consome essa outra api
    * Atividade
        Consumir outros endpoints de api feita pelo professor
* 22/04 - Consumo de APIs externas
    * Exposição
        * Apresentar codificação HTTP 200, 404, 500...
        * Tratar processo de falha de uma api para outra
    * Atividade
        * Definir tratativas de exceção
* 29/04 - Avaliação 2
    * Defesa de código e entrega do documento


* 06/05 - Integração de sistemas com mensageria
    * Exposição
        * Mostrar o conceito de Mensageria
        * Apresentar e configurar a tecnologia RabbitMQ
        * Apresentar os conceitos de: produtor, fila, exchange e consumidor
        * Criar o exemplo de uma fila
    * Atividade
        * Conceber uma fila e solicitar certas operações
* 13/05 - Integração de sistemas com mensageria
    * Exposição
        * Descrever o projeto da Avaliação 3
        * Mostrar como ocorre o consumo de uma fila por parte da API
    * Atividade
        * Executar a integração de um sistema de mensageria a uma api
* 20/05 - Avaliação 3
    * Defesa de código e entrega do documento

* 27/05 - Teste e monitoria de aplicações integradas
    * Exposição
        * Descrever o projeto da Avaliação 4
        * Abordar o conceito de teste de carga de uma API
        * Abordar métricas principais do teste de carga
        * Configurar o Postman para teste de carga de uma api
    * Atividade
        * Executar teste de carga de uma determinada api
* 03/06 - Teste e monitoria de aplicações integradas
    * Exposição
        * Configurar testes quentes no Postman
        * Abordar o conceito de testes unitários
        * Comentar sobre ferramentas de mercado para efetuar monitoramento
        * Abordar as diferentes métricas
    * Atividade
        * Desenvolver o teste quente e um teste unitário
* 10/06 - Avaliação 4
    * Defesa de código e entrega do documento
* 17/06 - Connect Week
* 24/06 - Prova Bimestral (3,0)

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