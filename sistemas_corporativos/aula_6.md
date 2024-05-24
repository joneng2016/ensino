# Aula 6

## Início

* NEXT JS: Framework baseado em ReactJS

```
npx create-next-app@latest
```

Ou clone
```
https://github.com/joneng2016/learning-api/tree/master/next-project/my-app
```

Acesse o diretório e faça

```
npm i
```

* Execute o sql que está em learning-api que está em db
* Para além disso, em learning-api acesse o diretório "product-api" e então faça;
* Para isso, execute o código presente em: https://github.com/joneng2016/learning-api/blob/master/start.md
* Acesse o diretório src/app/page.js e remova todo esse código:

```
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              heig
```



* Em src/app/globals.css

na linha 88, apague:
```
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
```


Crie o arquivo page.module.css em src/apps e crie a segunte estrutura:

```
.notFoundClass {
    text-align: center;
    width: 80%;
    margin: auto;
    border-radius: 15px;
    padding: 5px;
    color: white;
    background-color:  #ea2031;
}
```

Na raíz do projeto, faça:

```
npm i axios
```


Vamos fazer o componente de Login:

* Crie o diretório: src/app/components
* Em components, crie Login.js
* Crie o arquivo style.module.css: 

```
.login {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
    margin: 150px auto;
    padding: 15px;
}

.login > h1 {
    text-align: center;
    margin-bottom: 20px;
}

.login > form > div > input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.login > form > div > button {
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #007bff;
    color: #fff;
}
```


* Crie Login.js nesse mesmo lugar

```
"use client"

import styles from './style.module.css';

export default function Login(props) {
    return (
        <section className={styles.login}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" id="email" name="email" />
                </div> 
                <div>
                    <label htmlFor="password">Password</label>
                    <br/>                    
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}
```

* Então, em src/app/pages.js Monte:

```
"use client"

import React, {useState} from "react";  
import Login from "./components/login/Login";
import { setCookie } from "cookies-next";
import axios from "axios";
import style from './page.module.css'; 

export default function Home() {
  const [notFoundCount, setNotFoundCound] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.get(
      `http://localhost:3005/auth/login?email=${data.get('email')}&password=${data.get('password')}`
    ).then((response) => {
      setCookie(
        'auth_token',
        response.data.token
      )

      setNotFoundCound(false);
    })
    .catch((error) => {
      setNotFoundCound(true);
    })
  }
  
  function notFoundCountHtmlContet()
  {
    if (notFoundCount) {
      return <div className={style.notFoundClass}>
      <p>Esse usuário não existe, por gentileza registrar um usuário que existe</p>
      </div>
    }
  }


  return (
    <main>
      <Login handleSubmit={handleSubmit}></Login>
      {notFoundCountHtmlContet()} 
    </main>
  );
}
```

Observe que já cuidamos quando o login não ocorre, precisamos tratar o caso para quando o login ocorre = então: Crie o seguitne diretório:

```
src/app/products
```

Crie o arquivo page.js e monte:

```
'use client'

import axios from "axios";
import {useState, useEffect} from "react";
import { getCookie } from "cookies-next";

export default function Products()
{
    const [products, setProducts] = useState([])

    function htmlProcess(i, data) {
        return <div key={i}>
            <span style={{padding:"10px"}}>{data.name}</span>
            <span style={{padding:"10px"}}>{data.description}</span>
            <span style={{padding:"10px"}}>{data.company}</span>
            <span style={{padding:"10px"}}>{data.price}</span>            
        </div>
    }
    useEffect(() => {
        const controller = new AbortController();

        axios.get(
            'http://localhost:3005/products',
            {
                headers:{
                    authorization: getCookie('auth_token') 
                }
            }
        ).then((response) => {
            let x = []
    
            for (let i = 0; i < response.data.length; i++) {
                x.push(htmlProcess(i, response.data[i]))    
            }
            
            setProducts(x)
        })

        return () => {
            controller.abort()
        }

    }, [])

    return (
        <section>
            <h1>Produtos</h1>    
            {products}
         </section>
    );
}
```

Depois volte para src/app/page.js e faça:

```
  ...
    axios.get(
      `http://localhost:3005/auth/login?email=${data.get('email')}&password=${data.get('password')}`
    ).then((response) => {
      setCookie(
        'auth_token',
        response.data.token
      )

      setNotFoundCound(false);

        window.location.href = '/products';
    );

    ...
```


## Avaliação

https://github.com/joneng2016/ensino/blob/master/sistemas_corporativos/avaliacao3.md
