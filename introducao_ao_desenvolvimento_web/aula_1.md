# Aula 1

## Implementação e Manipulação de Documentos, Estruturas e Objetos

* HTML é uma linguagem de marcação de texto.
* HTML não é uma linguagem de programação
* A linguagem funciona com base em _tags_
* HTML 5 é semântico


_Exemplo de alguams tags_


`<article>` - Define um _container_ que conterá algum dado conteúdo da página <br>
`<aside>` - Para conteúdos importantes mas que apresentam aspecto secundário no texto <br>
`<figcaption>` Legenda de uma determinada figura </br>
`<figure>` Anexa figuras</br>
`<header>` Define o topo da página </br>



## Entendendo a estrutura geral de uma página HTML

```
<!DOCTYP html>
<html>
<head>
    <meta chartset="utf-8"/>    
</head>
<body>
    <!-- page content goes here -->
</body>
</html>
```


## Tag body 

A tag `<body>` apresenta toda a estrutura e conteúdo que é exibido para o leitor da página


### Tag header

Apresenta o conteúdo que fica no topo da página.

```
<body>
    <header>
        <h1>Texto Geral Sobre HTML</h1>
    </header>
</body>
```

### Tag footer

Apresenta o conteúdo que fica no final da página

```
<body>
    <header>
        <h1>Texto Geral Sobre HTML</h1>
    </header>
    <footer>
        <span>E acabou</span>
    </footer>    
</body>
```

## Considerações gerais sobre a tag header e footer

Elas não são semanticamente limitadas apenas as páginas webs, mas podem ser usadas dentro de tags que definem uma sessão nova, como por exemplo `<article>`

```
<body>
    <header>
        <h1>Texto Geral Sobre HTML</h1>
    </header>
    <article>
        <header>
            <h2>Texto Menor</h2>
        </header>
        <footer>
            <span>Acabou texto menor</span>
        </footer>        
    </article>    
    <footer>
        <span>E acabou</span>
    </footer>    
</body>
```


## Tag nav

Defin um conjunto de _termos_ (links, por exemplo)

<body>
    <header>
        <h1>Some fictional company Website</h1>
        <nav>
            <a href="Home.html">Document Structure</a>
            <a href="Blog.html">Writing Code</a>
            <a href="About.html">Styles</a>
        </nav>
    </header>
</body>


## hgroup e h(number)

A tag `<hNumber` é usado para definir um `título`. Quanto maior o valor do título, menor é a letra.
A tag `<hgroup>` é usada para agrupar os títulos


```
<body>
    <article>
        <header>
            <hgroup>
                <h1>Título 1</h1>
                <h2>Título 2</h2>
                <h3>Título 3</h3>
                <h4>Título 1</h4>
                <h5>Título 2</h5>
                <h5>Título 3</h5>

            </hgroup>
        </header>
        
        <p>Provide some useful information in the article</p>

    </article>
</body>
```


## Tag article

Apresenta composição independente de um documento, página, aplicação ou site


```


    <body>
        <article>
            <header>
                <hgroup>
                    <h1>Our first new Article</h1>
                </hgroup>
            </header>
            <section>
                <h1>Section 1</h1>
                <p>Some details about section 1</p>
                <aside>Did you know that 7/10 is 70%</aside>
            </section>
            <section>
                <h1>Section 2</h1>
            </section>
        </article>
        <article>
            <header>
                <hgroup>
                    <h1>Second huge article</h1>
                </hgroup>
            </header>
            <p>Provide some useful information in the article</p>
        </article>
        <article>
            <header>
                <hgroup>
                    <h1>Third huge article</h1>
                </hgroup>
            </header>
            <p>Provide some useful information in the third article</p>
        </article>
    </body>

```


## Tag section

Cria sessões dentro do artigo

```
    <body>
        <article>
            <header>
                <hgroup>
                    <h1>Our first new Article</h1>
                </hgroup>
            </header>
            <section>
                <h1>Section 1</h1>
                <p>Some details about section 1</p>
            </section>
            <section>
                <h1>Section 2</h1>
            </section>
        </article>
    </body>
```


## Tag aside

Usada para conteúdos secundários dentro da estrutura do texto

```
<body>
    <article>
        <header>
            <hgroup>
                <h1>Our first new Article</h1>
            </hgroup>
        </header>
        <section>
            <h1>Section 1</h1>
            <p>Some details about section 1</p>
            <aside>Did you know that 7/10 is 70%</aside>
        </section>
        <section>
            <h1>Section 2</h1>
        </section>
    </article>
</body>

```

### Tag fig e figcaption


```
<body>
    <article>
        <figure>
            <img src="orange.jpg" style="width:50px; height:50px;" />
            <figcaption>Fig 1: A really juicy orange.</figcaption>
        </figure>
    </article>
</body>
```


### Tag Progress


```
<body>
    <p>Our goal is to have 1000 users:</p>
    <span>0</span>
    <progress value="50" max="1000"></progress>
    <span>1000</span>
</body>
```


### Tag Mark

```
<p>Some very <mark style="background-color:red;">important</mark> information provided
here!</p>
```

### Tag Div

Define uma divisão se uma concepção semântica em si mesma.
```
<body>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>

</body>
```





### Tag table, tr e td

```
<table>
    <tr>
        <td colspan="3" id="Header"></td>
    </tr>
    <tr>
        <td rowspan="3" id="LeftBar"></td>
        <td rowspan="3" id="MainContent"></td>
        <td id="RightSideTop"></td>
    </tr>
    <tr>
        <td id="RightSideMiddle"></td>
    </tr>
    <tr>
        <td id="RightSideBottom"></td>
    </tr>
    <tr>
        <td colspan="3" id="Footer"></td>
    </tr>
</table>
```



# Exercícios

