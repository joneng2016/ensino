<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Aprendendo Swtich PHP</title>
        <meta charset="utf-8">
    </head>
    <body>
        <header>
            <hgroup>
                <h2>Problema um</h2>
            </hgroup>
        </header>            
        <main>
            <section>
                <h3>Vamos supor as seguintes entradas</h3>

                <?php 
                    $salario = '0,00';
                    $funcionario = 'Desenvolvedor';

                    if ($funcionario === 'Fachineiro') {
                        $salario = "1.200,00";
                    }

                    if ($funcionario === 'Secretário') {
                        $salario = "2.200,00";                        
                    }

                    if ($funcionario === 'Operário') {
                        $salario = "3.400,00";
                    }

                    if ($funcionario === 'Desenvolvedor') {
                        $salario = "4.500,00";
                    }

                    if ($funcionario === 'Gerente') {
                        $salario = "6.300,00";
                    }

                    if ($funcionario === 'Diretor') {
                        $salario = "10.000,00";
                    }

                    echo "R$ {$salario}";
                ?>
            </section>

            <section>
                <h3> Utilizacao do SWITCH </h3>

                <?php 
                    $salario = '0,00';
                    $funcionario = 'Desenvolvedor';

                    switch ($funcionario) {
                        case 'Fachineiro':
                            $salario = "1.200,00";
                            break;
                        case 'Secretario':
                            $salario = "2.200,00";
                            break;
                        case 'Operário':
                            $salario = "3.400,00";
                            break;
                        case 'Desenvolvedor':
                            $salario = "4.500,00";
                            break;
                        case 'Gerente':
                            $salario = "6.300,00";
                            break;
                        case 'Diretor':
                            $salario = "10.000,00";
                            break;
                    }
                ?>

                <strong>
                    <?= "R$ " . $salario; ?>
                </strong>

            </section>
        </main>
    </body>        
</html>
