# Avaliação Final

* Criar um sistema de chat usando microserviços, tabelas e apis.

## Regras gerais
* Deve ser realizado em grupos de no mínimo quatro e no máximo seis pessoas.
* Todas chamada deve ser protegida por cache
* Lógicas de regra de negócio devem estar em classes de Service
* Toda api que chamar uma tabela, deve fazer isso via Model 


## Mostrar funcionando (24/06)

__Usuários:__
* usuário 1, usuario1@email.com senha123
* usuário 2, usuario2@email.com senha321
* usuário 3, usuario1@email.com senha123
* usuário 4, usuario1@email.com senha321

* Usuário 1 manda mensagem para usuário 4: Olá, tudo bem? (bate no POST /message, depois no POST /message/worker e depois no GET /message)
* Usuário 4 manda mensagem para usuário 3: Está chovendo hoje (bate no POST /message, depois no POST /message/worker e depois no GET /message)
* Usuário 2 manda mensagem para usuário 1: Quer ir para a minha casa hoje  (bate no POST /message, depois no POST /message/worker e depois no GET /message)


Para os três casos, mostrar funcionando:
1 - autenticação em todos os endpoints
2 - endpoint que envia a mensagem
3 - endpoint que recebe a mensage

A apresentação deverá ser feita na semana 24/06, haverá 5 minutos por apresentação.

* endpoints funcionando para todos os casos,
* registro nas tabelas.

## Arquitetura

<img src="figs/fig2.png" />

## Apresentação/Critério de avaliação

Defesa de código por meio de uma apresentação que deve conter os seguinte elementos

* Todos os integrantes devem falar (0.5 pontos)
* O problema deve ser contextualizado (0.5 pontos)
* Deve haver diagramas que representem a implementação (0.5 pontos)
* O código deve ser apresentado de forma clara e legível (1.0 ponto)
* Evidenciar a utilização de Redis (0.25 pontos)
* Evidenciar a utilização de Fila (0.25 pontos)
* Evidenciar o consumo de APIs (0.25 pontos)
* Explicar todo o código (1.25 pontos)
* As apresentações devem durar entre 15 a 30 minutos (0.25 pontos)
* Os integrantes devem mostrar o código funcionando (0.25 pontos)
* __Integrante que faltar, a não ser por motivo válido, terá sua nota zerada__



## Estrutura Geral de cada serviço

### Receive-Send-API
    * Recebe a mensagem
    * Consulta a Auth-API para saber se o usuário está autenticado
    * Armazena a mensagem na fila
    * Endpoit worker que envia os dados da fila para uma tabela de message
    * Consulta a mensagem da tabela de message  
    * Consulta é feita mediante JWT
    * Deve ser feita em NodeJS
 
__POST /message__

header

```
{
    Authorization: token
}
```

payload

```
{
    userIdSend,
    userIdReceive,
    message
}
```

response

```
{
    message: 'mesage sended with success'
}
``` 

pseudo-codigo da controller

```

const authApiResponse = chamaAuthApiVerificaSeEstaAutenticado(
    headers.token,
    body.userIdSend
)

if (!authApiResponse.data.auth) {
    return {
        msg: 'not auth'
    }
} 

enviaParaAFila(
    {
        queue:`${body.userIdSend}${body.userIdReceive}`,
        message:body.message
    }
)

chamaApiEscreveMensagemNaTabelaDeHistorico(
    body.userIdSend,
    body.userIdReceive,
    message
)

```


__POST__ /message/worker

Lê todas as mensagems de um determinado canal formado por `${userIdSend}${userIdReceive}` e transfere para a tablea de message


header

```
{
    Authorization: token
}
```

payload

```
{
    userIdSend,
    userIdReceive,
}
```

response
```
{
    msg:'ok'
}
```


pseudo-codigo da controller

```

const authApiResponse = chamaAuthApiVerificaSeEstaAutenticado(
    headers.token,
    body.userId
)

if (!authApiResponse.data.auth) {
    return {
        msg: 'not auth'
    }
}


consultaMesagemDoCanalEscreveNaTabelaMessageViaRecordApi(`${userIdSend}${userIdReceive}`)


return criaFormatoMessage(msgs);
```



__GET /message__

Lê as mensagems direto da tabela message (via a Record-API)

QueryString
```
?user=userId
```

header

```
{
    Authorization: token
}
```

response 

```
{
    [
        userId:'usuário 1'
        msg: 'Mensagem'
    ],
    [
        userId:'usuário 2'
        msg: 'Mensagem'
    ],
    ...
    [
        userId:'usuário 3'
        msg: 'Mensagem'
    ]
}
```


pseudo-codigo da controller

```

const authApiResponse = chamaAuthApiVerificaSeEstaAutenticado(
    headers.token,
    body.userId
)

if (!authApiResponse.data.auth) {
    return {
        msg: 'not auth'
    }
}


const users = chamaAuthApiPegaTodosOsUsuariosDaBase();


const msgs = users.map(user => {
    return consultaViaHistoryApiAndPointDaTabelaMessage(`${user.Id}${body.userId}`)
})

return criaFormatoMessage(msgs);
```



### Auth-API
    * Deve ser feita em PHP
__GET token__

header

```
{
    Authorization: token
}
```

QueryString

```
?user=userId
```

response


Se está autenticado
```
{
    auth:true
}
```
Se não
```
{
    auth:false
}
```

pseudo-codigo controller

```
const userId = queryString.userId
const token = header.token;

if (!token) {
    return {auth:false}
}

const userObject = chamaModelUser(userId);
const obejectToken = decodeTokenPeloJwt(token);

if (obejectToken.userId === userObject.id &&  
    obejectToken.password === userObject.password
) {
    return {
        auth:true
    }
}

return {
    auth:false
}
```

__POST token__

payload

```
{
    email,
    password
}
```

response
```
{ 
    token: token
}
```

pseudo-codigo controller
```

const user = chamaModelDaUser(
    body.user.email,
    body.user.password
)

if (!user) {
    return {
        token: false
    }
}


const token = jwtTokenGenerate(
    {email: user.email, password: user.password}
)
```

__POST user__

payload

```
{
    name,
    lastName,
    email,
    password
}
```

response

se a criação ocorreu com sucesso,
```
{
    message:'ok',
    user: {
        name,
        lastName,
        email,
        password
    }
}
```

pseudo-codigo controller

```
trivial
```

__GET user__

QueryString

```
?email=
```

response

```
{
    name,
    lastName,
    email,
    password
}

```


pseudo-codigo controller

```
trivial
```

### Record-API
    * Deve ser feita em Python

__POST__ message 


payload

```
{
    message,
    userIdSend,
    userIdReceive
}
```


response
```
{
    ok
}
```


pseudo-codigo controller

```
trivial
```
