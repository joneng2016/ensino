console.log('por isso precisamos fazer alguma tratativa')

console.log('opcao 1')

function validate() {
    return generalObject && 
           generalObject.element4 && 
           generalObject.element4.element1
}

const reciveGeneralObject = validate()

if (!reciveGeneralObject) {
    console.log('outro processo que não o ...')
}



console.log('opcao 2')

function invokeBugsnag(error) {
    console.log('Bugsnag')
    console.log(error)
}
console.log('uso de try catch')

try {
    const valor = generalObject.element4.element1
} catch (error) {
    invokeBugsnag(error)
}

console.log('aplicação component')

console.log('ideal é proteger por inteiro')

function componet() {
    try {
        generalObject.element1
        generalObject.element4.element1
        generalObject.element5.element1

        generalObject.element6.element1

    } catch (error) {
        invokeBugsnag(error)
    }
}


componet()


console.log('contudo podemos ter cenários onde precisamos')
console.log('de uma tratativa geral e também de algumas ')
console.log('tratativas específicas ')


function componet1() {
    try {
        generalObject.element1
        
        try {
            generalObject.element4.element1
            generalObject.element5.element1
            generalObject.element6.element1
                
        } catch (eror) {
            generalObject.element4 = {element1:0}
            generalObject.element5 = {element1:0}
            generalObject.element6 = {element1:0}            
        }

        const resultOfPlus = generalObject.element4.element1 + 
                             generalObject.element5.element1 + 
                             generalObject.element6.element1

        console.log(generalObject.element1 + ' ' +  resultOfPlus)
    } catch (error) {
        invokeBugsnag(error)
    }
}


componet1()

// ------------------------


function makeRequestToApi() {
    return  {
        nome:'Roberto',
        email:'roberto.lima@email.com',
        documents:{
            rg:'11.111.111-1',
            cpf:'222.222.222-22'
        },
        telefone:'086689949-99'
    }
}

function component2() {
    const ofApi = makeRequestToApi()
    
    try {

        document.getElementById("nome").innerHTML =      ofApi.nome
        document.getElementById("email").innerHTML =     ofApi.email
        document.getElementById("rg").innerHTML =        ofApi.documents.rg
        document.getElementById("cpf").innerHTML =       ofApi.documents.cpf
        document.getElementById("motorista").innerHTML = validationMotorista2(ofApi.documents)
        document.getElementById("telefone").innerHTML =  ofApi.telefone

    } catch (error) {
        invokeBugsnag(error)        
    }

}

function validationMotorista(documents) {
    let response = 'não consta'

    try {
        response = documents.motorista.value
    } catch (error) {
        invokeBugsnag(error)
    }

    return response
}

function validationMotorista2(documents) {
    return documents && documents.motorista && documents.motorista.value ? documents.motorista.value : 'não consta'
}


component2()

