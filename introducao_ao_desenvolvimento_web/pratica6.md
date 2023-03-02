Durante a prática 5 observamos como pode ser muito desgastante criar
css. Existe uma forma mais simples, essa forma ocorre por meio de classes. Vejamos a seguinte
situação

<div style="margin-top:5px;background-color: blue;text-align: left; border: 1px solid; border-radius: 4px;">
    Almoço
</div>

Pode ser feito da seguinte forma

```
<html lang="pt-br">
    <head>
        ...
        <style>
            .onomequeeuquiser {
                margin-top:5px;
                background-color: blue;
                text-align: left; 
                border: 1px solid; 
                border-radius: 4px;
            }
        </style>
        ...
    </head>
    <body>
        <div class="onomequeeuquiser">
        </div>
    </body>    
</html>
```


Logo hoje a prática será criar um arquivo novo, mas com a mesma estrutura do resultado da prática 5. Contudo, em vez
de usar a estrutura de style como é hoje, vamos usar as classes (o nome fica a seu critério)
