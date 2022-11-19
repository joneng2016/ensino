let allIds = [
    'ossys', 
    'sysfile', 
    'process-thread',
    'memory',
    'show-first',
    'soinstall',
    'processors',
    'barramento',
    'language'
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
    console.log(window.location.url)
}

function showGabInf() {
    const stringIdOs = allIds.find((e) => {
        return document.getElementById(e).style.display === 'block'
    })

    document.getElementById("modal").style.display = 'block'

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
