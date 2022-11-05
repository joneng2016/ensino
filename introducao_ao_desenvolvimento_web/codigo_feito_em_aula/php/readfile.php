<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" >
        <title>Ler um arquivo</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <hgroup>
                <h2>Script que lê conteúdo de um dado arquivo</h2>
            </hgroup>
        </header>
        <article>
            <?php
                $contentOfFile = file_get_contents(__DIR__ . "\arquivo.txt");
            ?>

            <p>
                <?= $contentOfFile; ?>
            </p>

            <p>
                <?= str_replace('\n','<br>',$contentOfFile); ?>
            </p>
        </article>
    </body>
</html>
