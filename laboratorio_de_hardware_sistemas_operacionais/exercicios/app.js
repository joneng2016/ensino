let allIds = [
    'ossys', 
    'sysfile', 
    'process-thread',
    'memory',
    'show-first',
    'soinstall',
    'processors',
    'barramento'
]

mainProcess()

function mainProcess() {
    const inputVars = window.location.href.split('?')
    let idString = ''

    if (inputVars[1]) {
        const variableSelected = inputVars[1].split('=')

        if (variableSelected[0] == 'name') {
            idString = variableSelected[1]
        }

        showById(idString)
    }
}

function showById(idString) {
    _defineAllLikeNone()
    document.getElementById(idString).style.display = 'block'
}

function showGabInf() {
    const stringIdOs = allIds.find((e) => {
        return document.getElementById(e).style.display === 'block'
    })

    document.getElementById("modal").style.display = 'block'

    const docStructure = [
        {
            nameId:'ossys',
            title:'Sistemas Operacionais',
            questions:[
                _questionResponseObject(1, 'a'),
                _questionResponseObject(2, 'b'),
                _questionResponseObject(3, 'c'),
                _questionResponseObject(4, 'd'),
                _questionResponseObject(5, 'c'),
                _questionResponseObject(6, 'd'),
                _questionResponseObject(7, 'c'),
                _questionResponseObject(8, 'e'),
                _questionResponseObject(9, '<p>O gerenciamento de recursos inclui a multiplexação (compartilhamento) de recursos de duas maneiras diferentes: no tempo e no espaço. Quando um recurso é multiplexado no tempo, diferentes programas ou usuários se revezam usando-o. Primeiro, um deles usa o recurso, então outro e assim por diante.  Por exemplo, com apenas uma CPU e múltiplos programas querendo ser executados nela, o sistema operacional primeiro aloca a CPU para um programa, então, após ele ter sido executado por tempo suficiente, outro programa passa a fazer uso da CPU, então outro, e finalmente o primeiro de novo. Determinar como o recurso é multiplexado no tempo — quem vai em seguida e por quanto tempo — é a tarefa do sistema operacional.</p>'),
                _questionResponseObject(10, '<p>O outro tipo é a multiplexação de espaço. Em vez de os clientes se revezarem, cada um tem direito a uma parte do recurso. Por exemplo, a memória principal é normalmente dividida entre vários programas sendo executados, de modo que cada um pode ser residente ao mesmo tempo</p>'),
                _questionResponseObject(11, '<ol><li>nas placas-mãe há um programa chamado de sistema BIOS (Basic Input Output System — sistema básico de entrada e saída).</li><li>O BIOS conta com rotinas de E/S de baixo nível, incluindo procedimentos para ler o teclado, escrever na tela e realizar a E/S no disco, entre outras coisas</li><li>Hoje, ele fica em um flash RAM, que é não volátil, mas que pode ser atualizado pelo sistema operacional quando erros são encontrados no BIOS.</li></ol>'),
                _questionResponseObject(12, '<p> Entre os computadores dessa época, alguns eram binários, outros usavam válvulas e ainda outros eram programáveis, mas todos eram muito primitivos e levavam segundos para realizar mesmo o cálculo mais simples. </p> <p> Um único grupo de pessoas (normalmente engenheiros) projetava, construía, programava, operava e mantinha cada máquina. Toda a programação era feita em código de máquina absoluto, ou, pior ainda, ligando circuitos elétricos através da conexão de milhares de cabos a painéis de ligações para controlar as funções básicas da máquina.  </p> <p> Linguagens de programação eram desconhecidas Ninguém tinha ouvido falar ainda de sistemas operacionais.  </p> <p> O modo usual de operação consistia na reserva pelo programador de um bloco de tempo na ficha de registro na parede, então ele descer até a sala de máquinas, inserir seu painel de programação no computador e passar as horas seguintes torcendo para que nenhuma das cerca de 20.000 válvulas queimasse durante a operação.  </p> <p>No início da década de 1950, a rotina havia melhorado de certa maneira com a introdução dos cartões perfurados. Era possível agora escrever programas em cartões e lê-los em vez de se usarem painéis de programação de resto, o procedimento era o mesmo.</p>'),
                _questionResponseObject(13, '<p>A introdução do transistor em meados dos anos 1950 mudou o quadro radicalmente. Os computadores tornaram-se de tal maneira confiáveis que podiam ser fabricados e vendidos para clientes dispostos a pagar por eles com a expectativa de que continuariam a funcionar por tempo suficiente para realizar algum trabalho útil. </p> <p> Pela primeira vez, havia uma clara separação entre projetistas, construtores, operadores, programadores e pessoal de manutenção. Essas máquinas — então chamadas de computadores de grande porte (mainframes) —, ficavam isoladas em salas grandes e climatizadas, especialmente designadas para esse fim, com equipes de operadores profissionais para operá-las. </p> <p> Para executar uma tarefa [isto é, um programa ou conjunto de programas], um programador primeiro escrevia o programa no papel [em FORTRAN ou em linguagem de montagem (assembly)], então o perfurava nos cartões. Ele levava então o maço de cartões até a sala de entradas e o passava a um dos operadores e ia tomar um café até que a saída estivesse pronta </p> <p> Quando o computador terminava qualquer tarefa que ele estivesse executando no momento, um operador ia até a impressora, pegava a sua saída e a levava até a sala de saídas a fim de que o programador pudesse buscá-la mais tarde. </p> <p> Dado o alto custo do equipamento, não causa surpresa que as pessoas logo procuraram maneiras de reduzir o tempo desperdiçado. A solução geralmente adotada era o sistema em lote (batch). Os sistemas puramente em lote são raros hoje.  </p> <p> A ideia por trás disso era reunir um lote de tarefas na sala de entradas e então passá-lo para uma fita magnética usando um computador pequeno e (relativamente) barato, como um IBM 1401, que era muito bom na leitura de cartões, cópia de fitas e impressão de saídas</p>'),
                _questionResponseObject(14, '<p> O 360 era uma série de máquinas com softwares compatíveis, desde modelos do porte do 1401 a modelos muito maiores, mais potentes que o poderoso </p> <p> As máquinas diferiam apenas em preço e desempenho. Tendo em vista que todos tinham a mesma arquitetura e conjunto de instruções, programas escritos para uma máquina podiam operar em todas as outras — pelo menos na teoria. </p> <p> Nos anos seguintes, a IBM apresentou sucessores compatíveis com a linha 360, usando tecnologias mais modernas, conhecidas como as séries 370, 4300, 3080 e 3090. O IBM 360 foi a primeira linha importante de computadores a usar CIs (circuitos integrados) de pequena escala, proporcionando desse modo uma vantagem significativa na relação preço/desempenho sobre as máquinas de segunda geração, que foram construídas sobre transistores individuais. </p> <p> Nos anos seguintes, a IBM apresentou sucessores compatíveis com a linha 360, usando tecnologias mais modernas, conhecidas como as séries 370, 4300, 3080 e 3090. O IBM 360 foi a primeira linha importante de computadores a usar CIs (circuitos integrados) de pequena escala, proporcionando desse modo uma vantagem significativa na relação preço/desempenho sobre as máquinas de segunda geração, que foram construídas sobre transistores individuais. </p> <p> O forte da ideia da “família única” foi ao mesmo tempo seu maior ponto fraco. A intenção original era de que todo software, incluindo o sistema operacional, OS/360, funcionasse em todos os modelos. Não havia como a IBM (ou qualquer outra empresa) criar um software que atendesse a todas essas exigências de funcionar em máquinas diferentes. O resultado foi um sistema operacional enorme e extraordinariamente complexo </p> <p> Apesar dos problemas, o OS/360 e os sistemas operacionais de terceira geração similares produzidos na realidade proporcionaram um grau de satisfação bom Eles popularizaram várias técnicas-chave ausentes nos sistemas operacionais de segunda geração. Talvez a mais importante dessas técnicas tenha sido a multiprogramação. </p> <p> No 7094, quando a tarefa atual fazia uma pausa para esperar por uma fita ou outra operação de E/S terminar, a CPU simplesmente ficava ociosa até o término da E/S. A solução encontrada foi dividir a memória em várias partes, com uma tarefa diferente em cada partição Enquanto uma tarefa ficava esperando pelo término da E/S, outra podia usar a CPU. </p> <p> Se um número suficiente de tarefas pudesse ser armazenado na memória principal ao mesmo tempo, a CPU podia se manter ocupada quase 100% do tempo. Ter múltiplas tarefas na memória ao mesmo tempo de modo seguro exige um hardware especial para proteger cada uma contra interferências e transgressões por parte das outras </p> <p> Os sistemas operacionais de terceira geração ainda eram basicamente sistemas em lote. Muitos programadores sentiam saudades dos tempos de computadores de primeira geração quando eles tinham a máquina só para si por algumas horas e assim podiam corrigir eventuais erros em seus programas rapidamente. Com sistemas de terceira geração, o tempo entre submeter uma tarefa e receber de volta a saída era muitas vezes de várias horas. Programadores não gostavam muito disso. </p> <p> Esse desejo por um tempo de resposta rápido abriu o caminho para o timesharing (compartilhamento de tempo), uma variante da multiprogramação, na qual cada usuário tem um terminal on-line. </p>'),
                _questionResponseObject(15, '<p> Com o desenvolvimento dos circuitos integrados em larga escala (Large Scale Integration — LSI) — que são chips contendo milhares de transistores em um centímetro quadrado, surgiu a era do computador moderno. </p> <p> No início da década de 1980, a IBM projetou o IBM PC e saiu à procura de um software para ser executado nele. O pessoal na IBM contatou Bill Gates para licenciar o seu interpretador BASIC. Eles também perguntaram se ele tinha conhecimento de um sistema operacional para ser executado no PC. </p> <p> Gates se deu conta de que uma fabricante de computadores local, Seattle Computer Products, tinha um sistema operacional adequado, DOS (Disk Operating System — sistema operacional de disco). Ele os procurou e pediu para comprá-lo (supostamente por US$ 75.000), oferta que eles de pronto aceitaram. </p> <p> Gates ofereceu então à IBM um pacote DOS/BASIC, que a empresa aceitou. Gates se deu conta de que uma fabricante de computadores local, Seattle Computer Products, tinha um sistema operacional adequado, DOS (Disk Operating System — sistema operacional de disco). Ele os procurou e pediu para comprá-lo (supostamente por US$ 75.000), oferta que eles de pronto aceitaram. </p> <p> Gates ofereceu então à IBM um pacote DOS/BASIC, que a empresa aceitou. A IBM queria fazer modificações, então Gates contratou para a Microsoft a pessoa que havia escrito o DOS, Tim Paterson para fazê-las. O sistema revisado foi renomeado MS-DOS (MicroSoft Disk Operating System) e logo passou a dominar o mercado do IBM PC. MS-DOS e outros SOs para os primeiros microcomputadores eram todos baseados na digitação de comandos no teclado pelos usuários.  Isto finalmente mudou por conta da pesquisa realizada por Doug Engelbert no Instituto de Pesquisa de Stanford na década de 1960. Engelbart inventou a Graphical User Interface (GUI — Interface Gráfica do Usuário), completa com janelas, ícones, menus e mouse. Essas ideias foram adotadas por pesquisadores na Xerox PARC e incorporadas nas máquinas que eles produziram </p> <p> Um dia, Steve Jobs, que coinventou o computador Apple em sua garagem, visitou a PARC, viu uma GUI e no mesmo instante percebeu o seu valor potencial Jobs partiu foi produzir um Apple com o GUI. O projeto levou ao Lisa, que era caro demais e fracassou. A 2ª tentativa, o Apple Macintosh, foi um sucesso, por ser amigável ao usuário, significando que era dirigido a usuários que não apenas não sabiam nada sobre computadores como não tinham intenção alguma de aprender sobre eles. </p> <p> Quando decidiu produzir um sucessor para o MS- -DOS, a Microsoft foi fortemente influenciada pelo sucesso do Macintosh. Ela produziu um sistema baseado em GUI chamado Windows, que originalmente era executado em cima do MS-DOS </p> <p> Por cerca de dez anos, de 1985 a 1995, o Windows era apenas um ambiente gráfico sobre o MS-DOS. Entretanto, começando em 1995, uma versão independente, Windows 95, foi lançada incorporando muitos aspectos de sistemas operacionais Em 1998, uma versão ligeiramente modificada deste sistema, chamada Windows 98, foi lançada. </p>'),
                _questionResponseObject(16, '<p> O primeiro telefone móvel real apareceu em 1946 e pesava em torno de 40 quilos. Você podia levá-lo para toda parte, desde que você tivesse um carro para carregá-lo. O primeiro telefone verdadeiramente móvel foi criado na década de 1970 e, pesando cerca de um quilo, era positivamente um peso-pena. Ele ficou conhecido carinhosamente como “o tijolo”. <p> </p> A ideia de combinar a telefonia e a computação em um telefone exista desde a década de 1970 Somente em meados de 1990, quando a Nokia lançou o N9000, isso ocorreu: combinava dois dispositivos mormente separados: um telefone e um PDA (Personal Digital Assistant) Em 1997, a Ericsson cunhou o termo smartphone para o seu “Penelope” GS88. <p> </p> A maioria dos smartphones na primeira década após sua criação era executada em Symbian OS. Era o sistema operacional escolhido para as marcas populares como Samsung, Sony Ericsson, Motorola e especialmente Nokia A participação de mercado do Symbian desabou. Em 2011, a Nokia abandonou o Symbian e anunciou que se concentraria no Windows Phone como sua principal plataforma. </p>')
            ]
        },
        {
            nameId:'sysfile',
            title:'Sistema de Arquivos',
            questions:[
                _questionResponseObject(1, 'd'),
                _questionResponseObject(2, 'a'),
                _questionResponseObject(3, 'b'),
                _questionResponseObject(4, 'a'),
                _questionResponseObject(5, 'd'),
                _questionResponseObject(6, '<ul><li>Sitema de arquivos para Apple OS (OS X</li><li>Suporta arquivos de 2GB e volumes de 2TB</li><li>APFS - mais moderno</li><li>Tamanho máxi de arquivo e volume 8 EB</li><li>Apenas Apple</li></ul>'),
                _questionResponseObject(7, '<ul><li>Padrão orignal CD</li><li>Nomes de arquivos: 8.3 caracteres</li><li>Tamanho de volume restrido pelo tamanho da mídia de até 4 GB</li><li>Suportado em Mac OS, Unix, Linux e Windows</li></ul>'),
                _questionResponseObject(8, '<p>NFTS é indicado para sistemas Windows, por possuir Journaling e melhor integração com produtos Microsoft. Já o ext4 é indicado para dispositivos equivalentes, contudo para Linux - pelos mesmos motivos daquele. FAT32 e exFAT são ótimas alternativas para dispositivos de mídia removíveis uma vez que são sistemas de arquivos mais simples.</p>'),
            ]
        },
        {
            nameId:'process-thread',
            title:'Processos e Threads',
            questions:[
                _questionResponseObject(1, 'd'),
                _questionResponseObject(2, 'c'),
                _questionResponseObject(3, 'b'),
                _questionResponseObject(4, 'c'),
                _questionResponseObject(5, '<p> As principais chamadas de sistema de gerenciamento de processos são as que lidam com a criação e o término de processos. Exemplo: Um processo chamado de interpretador de comandos ou shell lê os comandos de um terminal. O usuário acabou de digitar um comando requisitando que um programa seja compilado. O shell tem de criar agora um novo processo que vai executar o compilador. Quando esse processo tiver terminado a compilação, ele executa uma chamada de sistema para se autofinalizar.</p>'),
                _questionResponseObject(6, '<ul><li>Em execução (realmente usando a CPU naquele instante).</li><li>Pronto (executável, temporariamente parado para deixar outro processo ser executado).</li><li>Bloqueado (incapaz de ser executado até que algum evento externo aconteça). O terceiro estado é fundamentalmente diferente dos dois primeiros, pois o processo não pode ser executado, mesmo que a CPU esteja ociosa e não tenha nada mais a fazer.</li></ul>'),
                _questionResponseObject(7, '<ul><li>A transição 1 ocorre quando o sistema operacional descobre que um processo não pode continuar agora. Em alguns sistemas o processo pode executar uma chamada de sistema, como em pause, para entrar em um estado bloqueado.</li><li>As transições 2 e 3 são causadas pelo escalonador de processos, uma parte do sistema operacional, sem o processo nem saber a respeito delas. Escalonamento: decidir qual processo deve ser executado, quando e por quanto tempo</li><li>A transição 2 ocorre quando o escalonador decide que o processo em andamento foi executado por tempo suficiente, e é o momento de outro ter algum tempo de CPU.</li><li>A transição 3 ocorre quando todos os outros processos tiveram sua parcela justa e está na hora de o primeiro processo chegar à CPU para ser executado novamente.</li><li>A transição 4 se verifica quando o evento externo pelo qual um processo estava esperando (como a chegada de alguma entrada) acontece.</li><li>As informações são salvas quando um processo é trocado do estado em execução para pronto ou bloqueado, são de maneira que ele possa ser reiniciado mais tarde como se nunca tivesse sido parado.</li></ul>'),
                _questionResponseObject(8, '<ul><li>A maioria dos processos termina por terem realizado o seu trabalho. Quando um compilador termina de traduzir o programa dado a ele, o compilador executa uma chamada para dizer ao sistema operacional que ele terminou.</li><li>Essa chamada é exit em UNIX e ExitProcess no Windows.<li>Saída normal (voluntária)</li><li>Erro fatal (involuntário)</li><li>Saída por erro (voluntária)</li><li>Morto por outro processo (involuntário)</li><li>Exemplos de erro de programa: executar uma instrução</li></ul>'),
                _questionResponseObject(9, '<ul><li>São processos com espaço de endereçamento compartilhado (*processos leves*)</li><li>Os threads acrescentam a capacidade para entidades em paralelo compartilharem um espaço de endereçamento e todos os seus dados entre si.</li><li>Um segundo argumento para a existência dos threads é que como eles são mais leves do que os processos, eles são mais fáceis (mais rápidos) para criar e destruir do que os processos (criar um thread pode ser algo de 10 a 100 vezes mais rápido do que criar um processo).</li></ul>')
            ]
        },
        {
            nameId:"memory",
            title:"Memória",
            questions:[
                _questionResponseObject(1, 'b'),
                _questionResponseObject(2, 'a'),
                _questionResponseObject(3, 'b'),
                _questionResponseObject(4, 'c'),
                _questionResponseObject(5, 'd'),
                _questionResponseObject(6, 'd'),
                _questionResponseObject(7, 'd'),
                _questionResponseObject(8, 'c'),
                _questionResponseObject(9, 'd')                                                        
            ]
        },
        {
            nameId:"soinstall",
            title:"Instalação de Sistema Operacional",
            questions:[
                _questionResponseObject(1, "1,5,7,9,6,10,11,3,4,2,12,8")                                                        
            ]
        },
        {
            nameId:"processors",
            title:"Processadores",
            questions:[
                _questionResponseObject(1, "c"),
                _questionResponseObject(2, "b"),
                _questionResponseObject(3, "d"),
                _questionResponseObject(4, "a"),
                _questionResponseObject(5, "c"),
                _questionResponseObject(6, "d"),
                _questionResponseObject(7, "c"),
                _questionResponseObject(8, "d")                
            ]
        }

    ]

    const dataStructure = docStructure.find(e => e.nameId === stringIdOs)

    if (!dataStructure) {
        document.getElementById("modal-html-content").innerHTML = `<h2>Sem Gabarito no momento</h2>`
    } else {
        document.getElementById("modal-html-content").innerHTML = [
            `<h2>${dataStructure.title}</h2>`, 
            dataStructure.questions.map(e => `<span><strong>${e.question}</strong>: ${e.response}</span><br>`).join('')
        ].join('')
    }

}

function closeTime() {
    document.getElementById("modal-html-content").innerHTML = ""
    document.getElementById("modal").style.display = 'none'
}

function _defineAllLikeNone() {
    allIds.forEach(e => document.getElementById(e).style.display = 'none')
}

function _questionResponseObject(question, response) {
    return {question, response}
}