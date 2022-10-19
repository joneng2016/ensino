# Trabalho 1, Quarto Bimestre

* Dentro do banco de dados, crie o seguinte banco: trabalho1quartobi.  
* Crie um fork do projeto https://github.com/joneng2016/framework-senac022022
* Acesso o arquivo: app/FrameworkTools/Database/DatabaseConnection.php e mude o dbname para: trabalho1quartobi, 

https://github.com/joneng2016/framework-senac022022/blob/master/app/FrameworkTools/Database/DatabaseConnection.php#L23

* Usando o banco de dados trabalho1quartobi, crie a seguinte tabela:

```
DROP DATABASE IF EXISTS trabalho1quartobi;
CREATE DATABASE trabalho1quartobi;

USE trabalho1quartobi;

CREATE TABLE petshop (
        id_petshop INTEGER PRIMARY KEY AUTO_INCREMENT,
        name_pet VARCHAR(255),
        type_service ENUM('banho','tosa')
);

```

Faça uma classe Controller, ela deve ter o seu primeiro nome, (exp: JonathanController). Essa classe controller pode ter dois métodos (associar a cada método uma rota específica). O nome de cada método deve ser o seu último nome acrescido de um número. Por exemplo, o meu nome é Jonathan Morris Samara, logo os métodos ficam: samara1() e samara2(). A classe fica assim então: 

```
<?php

... 

class JonathanController extends AbstractController {

    public function samara1() {
        code 1 ...
    }

    public function samara1() {
        code 2 ...
    }
}

```

Crie duas rotas. As rotas devem ser análogas ao nome das funções. A primeira deve ser GET e a segunda deve ser POST. Neste caso, por exemplo, fica: 

```
use App\Controllers\TrainQueryController;

trait Get {
    
    private static function get() {
        switch (self::$processServerElements->getRoute()) {
                    
            case '/hello-world':
                return (new HelloWorldController)->execute();
            break;

            case '/train-query':
                return (new TrainQueryController)->execute();
            break;

            case '/samara1':
                return (new JonathanController)->samara1();
            break;
        }
    }

}
```


E a segunda fica

```
<?php

namespace App\FrameworkTools\Implementations\Route;

use App\Controllers\InsertDataController;

trait Post {
    
    private static function post() {
        switch (self::$processServerElements->getRoute()) {
                    
            case '/insert-data':
                return (new InsertDataController)->exec();
            break;

            caese '/samara2':
                return (new JonathanController)->samara2();
            break;
        }
    }

}
```

Como a primeira rota é do tipo GET, o código que você deve executar nela consiste em trazer todos os dados da tabela petshop.

Como a segunda rota é do tipo POST, o código que você deve executar nela consiste na seguinte funcionalidade: Realizer o insert de algum dado na tabela petshop