# Aula 2 - Processos e Threads

## Sistemas Operacionais (SO) - Processos

* Um programa em execução
* Em um sistema de multiprogramação a CPU muda de um processo para outro muito rapidamente (em ms).
* Assim sendo a CPU transmite a sensação de que esses processos são paralelos (ou pseudoparalelismo).
* Esse mecanismo de troca rápida tem o nome de multiprogramação.
* Um programa executado duas vezes são dois processos.
* Um dado programa pode ser iniciado duas vezes
* Eles passam a ser processos distintos


### Espaço de endereçamento

* Cada processo é associado a um dado espaço de endereçamento. Isso consiste em uma lista de posições de memória que vão de 0 a algum máximo onde o processo pode ler e escrever.
* O espaço de endereçamento contém o programa executável, os dados do programa e sua pilha
* A pilha contém uma estrutura para cada rotina (conjuntos e instruções), que foi chamada mas ainda não encerrada.
* Armazena parâmetros de entrada, variáveis locais, variáveis temporárias, registradores, lista de arquivos abertos e lista de processos relacionados.
* Um processo é na essência um contêiner que armazena todas as
informações necessárias para executar um programa

### Exemplo de Processos
* O usuário pode ter inicializado um programa de edição de vídeo e mandou
converter um vídeo de uma hora para um formato MP4 (algo que pode levar
horas) e então foi navegar na web enquanto convertia.
* Ao mesmo tempo, um processo em segundo plano que “desperta” de tempos
em tempos para conferir e-mails que chegam pode ter começado a ser
executado.
* Periodicamente, o sistema operacional decide parar de executar um processo
e começa a executar outro, talvez porque o primeiro utilizou mais do que sua
parcela de tempo da CPU no último segundo ou dois
* Quando um processo é suspenso temporariamente assim, ele deve ser
reiniciado mais tarde no exato mesmo estado em que estava quando foi
parado.
* Isso significa que todas as informações a respeito do processo precisam ser
explicitamente salvas em algum lugar durante a suspensão. 

### Tabela de Processos
* Em muitos sistemas operacionais, todas as informações a respeito de cada
processo, fora o conteúdo do seu próprio espaço de endereçamento, estão
armazenadas em uma tabela do sistema operacional chamada de tabela de
processos

<center>
    <img src="imgs/tabela.png" width="600px;" />
</center>

### Execução de Processos
* As principais chamadas de sistema de gerenciamento de processos são as que
lidam com a criação e o término de processos
* Exemplo: Um processo chamado de interpretador de comandos ou shell lê os
comandos de um terminal. O usuário acabou de digitar um comando
requisitando que um programa seja compilado. O shell tem de criar agora um
novo processo que vai executar o compilador. Quando esse processo tiver
terminado a compilação, ele executa uma chamada de sistema para se
autofinalizar.
* Um processo pode criar um ou mais processos (chamados de processos filhos). Então temos processos pais e processos filhos
* A estrutura desses processos pode ser organizada em um estilo de árvore, como na figura ao lado

<center>
    <img src="imgs/processos.png" width="350px" />
</center>


### Estados

<div style="display:inline;">
    <div>
          <ul >
            <li> 
                Processos relacionados que estão cooperando para finalizar alguma tarefa muitas vezes precisam comunicar-se entre si e sincronizar as atividades.
            </li>
            <li>
                Outras chamadas de sistemas de processos permitem requisitar mais memória (ou liberar memória não utilizada),esperar que um processo filho termine etc.
            </li>
            <li>
                Quando um usuário envia um sinal do teclado, o sinal é entregue a todos os membros do grupo de processos associados com o teclado no momento (em geral todos os processos ativos que foram criados na janela atual).
            </li>
            <li>
                Individualmente, cada processo pode pegar o sinal, ignorá-lo, ou assumir a ação predefinida, que é ser morto pelo sinal.
            </li>
            <li>
                Os processos também podem interagir entre si.
            </li>
            <li>
                Um processo pode gerar alguma saída que outro processo usa como entrada
            </li>
            <li>
                Em geral, há três estados nos quais um processo pode se encontrar:
            </li>
          </ul>
    </div>
    <div>
        <center>
            <img src="imgs/estados.png" width="340px" style="border-radius:20px;"/>
        </center>            
    </div>
</div>

<h3><i>Estado em si</i></h3>

* Em execução (realmente usando a CPU naquele instante).
* Pronto (executável, temporariamente parado para deixar outro processo
ser executado).
* Bloqueado (incapaz de ser executado até que algum evento externo
aconteça). O terceiro estado é fundamentalmente diferente dos dois primeiros, pois o
processo não pode ser executado, mesmo que a CPU esteja ociosa e não tenha
nada mais a fazer.

<h3><i>Transição de estados</i></h3>

* A <b>transição 1</b> ocorre quando o sistema operacional descobre que um processo
não pode continuar agora. Em alguns sistemas o processo pode executar uma chamada de sistema, como
em pause, para entrar em um estado bloqueado.
* As <b>transições 2 e 3</b> são causadas pelo escalonador de processos, uma parte do sistema operacional, sem o processo nem saber a respeito delas. Escalonamento: decidir qual processo deve ser executado, quando e por quanto tempo
* A <b>transição</b> 2 ocorre quando o escalonador decide que o processo em andamento foi executado por tempo suficiente, e é o momento de outro ter algum tempo de CPU. 
* A <b>transição 3</b> ocorre quando todos os outros processos tiveram sua parcela justa e está na hora de o primeiro processo chegar à CPU para ser executado novamente.
* A <b>transição 4</b> se verifica quando o evento externo pelo qual um processo estava
esperando (como a chegada de alguma entrada) acontece.
* As informações são salvas quando um processo é trocado do estado em execução para pronto ou bloqueado, são de maneira que ele possa ser reiniciado mais tarde como se nunca tivesse sido parado.


### Execução de Processos

* Alguns dos processos executam programas que levam adiante comandos digitados pelo usuário... Outros processos são parte do sistema e lidam com tarefas como levar adiante solicitações para serviços de arquivos ou gerenciar os detalhes do funcionamento de um acionador de disco ou fita…
* Por exemplo, no caso de ocorrer uma interrupção de disco: o sistema toma uma decisão para parar de executar o processo atual e executa o processo de disco, que foi bloqueado esperando por essa interrupção. 
* Cada pessoa autorizada a usar um sistema possui uma UID (User IDentification — identificação do usuário), indicada pelo administrador do sistema. Todo processo iniciado tem a UID da pessoa que o iniciou. Um processo filho tem a mesma UID que o seu processo pai. Usuários podem ser membros de grupos, cada qual com uma GID (Group IDentification — identificação do grupo)
* Uma UID, chamada de superusuário (em UNIX), ou Administrador (no Windows), tem um poder especial e pode passar por cima de muitas das regras de proteção.


### Espaços de Endereçamento

* Todo computador tem alguma memória principal que ele usa para armazenar programas em execução.
* Em um sistema operacional muito simples, apenas um programa de cada vez está na memória.
* Para executar um segundo programa, o primeiro tem de ser removido e o segundo colocado na memória.
* Sistemas operacionais mais sofisticados permitem que múltiplos programas estejam na memória ao mesmo tempo.
* Para evitar que interfiram entre si (e com o sistema operacional), algum tipo de mecanismo de proteção é necessário.
* Embora esse mecanismo deva estar no hardware, ele é controlado pelo sistema operacional.
* Para evitar que interfiram entre si, existe um gerenciamento e proteção da
memória principal do computador.
* Cada processo tem algum conjunto de endereços que ele pode usar,tipicamente indo de 0 até algum máximo.
* No caso mais simples, a quantidade máxima de espaço de endereços que um processo tem é menor do que a memória principal.
* Dessa maneira, um processo pode preencher todo o seu espaço de endereçamento e haverá espaço suficiente na memória principal para armazená-lo inteiramente.
* No entanto, em muitos computadores os endereços são de 32 ou 64 bits, dando um espaço de endereçamento de 2<sup>32</sup> e 2<sup>64</sup>, respectivamente.
* Na essência, o sistema operacional cria a abstração de um espaço de
endereçamento como o conjunto de endereços ao qual um processo pode se
referir.
* O espaço de endereçamento é desacoplado da memória física da máquina e
pode ser maior ou menor do que a memória física.


### Criação de Processos

* Quatro eventos principais fazem com que os processos sejam criados:
  * Inicialização do sistema
  * Execução de uma chamada de sistema de criação de processo por um
processo em execução.
  * Solicitação de um usuário para criar um novo processo
  * Início de uma tarefa em lote

* **primeiro plano:** processos que interagem com usuários e realizam
trabalho para eles.
* **segundo plano:** têm alguma função específica; quando lidam com algumas atividades, como e-mail, páginas da web, notícias, impressão e assim por diante, são chamados de daemons 
* Em sistemas interativos, os usuários podem começar um programa digitando um comando ou clicando duas vezes sobre um ícone. Cada uma dessas ações inicia um novo processo e executa nele o programa selecionado.


### Término de Processos

* A maioria dos processos termina por terem realizado o seu trabalho. Quando um compilador termina de traduzir o programa dado a ele, o compilador executa uma chamada para dizer ao sistema operacional que ele terminou.
* Essa chamada é exit em UNIX e ExitProcess no Windows.
* Saída normal (voluntária)
* Erro fatal (involuntário)
* Saída por erro (voluntária)
* Morto por outro processo (involuntário)
* Exemplos de erro de programa: executar uma instrução


## Threads

* São processos com espaço de endereçamento compartilhado (*processos leves*)
* Os threads acrescentam a capacidade para entidades em paralelo compartilharem um espaço de endereçamento e todos os seus dados entre si.
* Um segundo argumento para a existência dos threads é que como eles são mais leves do que os processos, eles são mais fáceis (mais rápidos) para criar e destruir do que os processos (criar um thread pode ser algo de 10 a 100 vezes mais rápido do que criar um processo).
* Os processadores de texto (Word) precisam lidar com comandos de usuário  (inserção de texto pelo teclado, cliques de mouse), precisa dar a resposta correta para o comando, dentre outras funções, como o salvamento automático
* Threads para um processo do Word poderiam, cada uma, cuidar de uma função: - de escutar a entrada do usuário (cliques e teclado) - prover a resposta - salvar automaticamente


## Exercícios para prática

https://proffjonathansamara.000webhostapp.com?name=process-thread