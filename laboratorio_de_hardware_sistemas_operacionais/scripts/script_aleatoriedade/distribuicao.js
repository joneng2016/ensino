const namesOfStudents = [
    'ADRIELLY CLARICE ALMEIDA MACEDO',
    'ALEXANDRE DE SOUZA FLORES',
    'ANDRÉ MAGALHÃES CHUPERNATE',
    'ANGÉLICA LEAL SANTOS',
    'ARIE SCHERREIER FERNEDA',
    'BERNARDO ENRICO MACHOSKI',
    'CAIO RAMOS DE LIMA',
    'CAUÃ COLARES XENOFONTE',
    'GABRIEL ANTÔNIO CAVICHIOLO',
    'GIOVANA CAMARGO GOES',
    'GUILHERME WILLIAM SCHNEIDERS',
    'HENRIQUE SILVA MORTARI',
    'JOSIANE ALVES DA SILVA',
    'JOSIAS SOBJAK SILVA',
    'KENNY FONTANA HAYASHI',
    'LEONARDO TAVARES CORTARELLI',
    'LUCAS TSUDA YAGUI',
    'LUIZ CARLOS PEREIRA DE OLIVEIRA',
    'LUIZ FELIPE DA SILVA SANTOS',
    'MARCELO SCHERER',
    'PAULO CESAR CORDEIRO FILHO',
    'PEDRO GABRIEL DE OLIVEIRA NAZARETH',
    'PEDRO HENRIQUE MEQUELIM DA SILVA',
    'PLÁUTO KERBER JUNIOR',
    'QUENAN SAMUEL COLAÇO TEODORO',
    'RENAN GUAPYASSÚ TEIXEIRA CAPOVILLA JERDY',
    'SERGIO DANIEL MEHL CAVALHEIRO',
    'THIAGO DE OLIVEIRA CRISTO',
    'VICTOR FLAVIO DE CARVALHO',
    'VINICIUS PEDROSO MARTINS',
    'VITOR SAMPAIO AMARAL',
    'WELLYTON DOS SANTOS PEDROSO',
    'WILLIAM WERNHER COSTA SOUZ'
];

const nameOfSearchTopics = [
    'História da Computação (Da máquina de Turing até os dias atuais)',
    'História dos Sistemas Operacionais Windows (Descritivo histórico das versões do Windows)',
    'História dos Kernels Linux (Desenvolvimento do Kernel Linux)',
    'História dos Sistemas Operacionais MacOS (Contexto Histórico da evolução do MacOs)',
    'História do Android',
    'Funcionamento e Tipos de Memória RAM',
    'Funcionamento e Tipos de Processadores CPU',
    'Funcionamento e Tipos de Processadores GPU',
    'História e conceitos básicos de ShellScript',
    'História e conceitos básicos de PowerShell',
    'História e conceitos básicos de MSDOS'
]



const htmlNames = namesOfStudents.map((student,index) => {     
    return '<tr >' +
        `<th scope="row">${index + 1}</th>` +
        `<td>${student}</td>` +            
    '</tr>'
})


$("#body-table-first").append(htmlNames.join(' '))




// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}



function execDistributionOfGroup() {
    
    const newDistribution = shuffleArray(namesOfStudents)
    let studentsSet = [];
    let trigger = 1
    let names = ''

    newDistribution.forEach((element) => {
        if (trigger < 3)
            names += `${element}, `
        if (trigger == 3)
            names += `${element}`

        trigger++

        if (trigger == 4) {
            studentsSet.push(names)
            trigger = 1
            names = ''
        }
    });

    const setAndTopic = studentsSet.map((student,index) => {        
        return '<tr >' +
            `<th scope="row">${index + 1}</th>` +
            `<td>${nameOfSearchTopics[index]}</td>` +                        
            `<td>${student}</td>` +            
        '</tr>'
    }).join('')

    $("#first-table").css('display','none')
    
    $("#second-table").css('display','table')

    $("#body-table-second").append(setAndTopic)
}

function showTopics() {
    $("#modalbody").html('')
    $("#modalbody").append(nameOfSearchTopics.join('<br>'))       
}