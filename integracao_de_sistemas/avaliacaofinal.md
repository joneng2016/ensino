## Receive-Send-API
    * Recebe a mensagem
    * Consulta a Auth-API para saber se o usuário está autenticado
    * Armazena a mensagem na fila
    * Consulta a mensagem do usuário na fila
    * Consulta é feita mediante JWT 
 

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


__GET /message__

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



## Auth-API

__GET token__

header

QueryString

```
?user=userId
```

```
{
    Authorization: token
}
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




## Record-API


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




