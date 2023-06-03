# Avaliação do Segundo Bimestre

Tendo em vista o programa do anexo 1. Para realizar o start desse script, copie o código
e cole em um arquivo .py. Não apenas isso como também crie um arquivo chamado `requirements.txt` no mesmo diretório do .py já criado. Esse arquivo de requirements deve conter o seguinte conteúdo `pandas`. Feito isso, instale o `Python3` e o `pip3` em seu 
computador. Então execute: `pip3 install -r requirements.txt`

Esse script faz o seguinte:

1 - busca os dados de certos usuários

2 - formata esses dados em uma dada estrutura

3 - cria um objeto de processamento de dados

4 - escreve um arquivo csv

Tendo em vista esse script, no final da execução do método `execute` crie os seguintes testes unitários:

1 - Crie um teste onde self._user é um array e é maior do que zero (objetivo é verificar) 
se os dados estão sendo retornados no banco de dados.

2 - Crie um teste em self._user que acesse uma determinada linha (pode ser a primeira posição) e verifique se o dicionário contem os seguintes atributos: 

* name
* age
* document
* data_record

3 Crie um teste em self._before_data_structure que avalie se existem os seguintes atributos: "name", "age", "document", "data_record"

4 Ainda na mesma variávle de três, crie um teste para verificar apenas esses atributos existem, se não há mais nenhum para além desses sendo criado.

5 Crie um teste que verifique se o arquivo `file.csv` realmente foi criado ao término da execução do software.

6 Crie um teste que verifique se o conteúdo do arquivo corresponde ao que se faz presente dentro do array self._user

## Anexo 1

```
import pandas as pd

class get_user_infs:
    def __init__(self):
        self._users = []
        self._before_data_structure = {}
        self._pd_structure = None

    def execute(self):
        self._get_all_users()
        self._select_infs_of_user()
        self._build_pandas_structure()
        self._write_csv_file()

    def _get_all_users(self):
        self._users.append(
            self._structure_of_db(
                "Jonhy",
                23,
                "00.00.00-1",
                "2022-01-01"
            )
        )
        
        self._users.append(
            self._structure_of_db(
                "Alan",
                21,
                "00.00.00-2",
                "2022-01-03"
            )
        )

        self._users.append(
            self._structure_of_db(
                "Aline",
                21,
                "00.00.00-3",
                "2022-01-06"
            )
        )

        self._users.append(
            self._structure_of_db(
                "Fernanda",
                21,
                "00.00.00-4",
                "2022-01-10"
            )
        )

        self._users.append(
            self._structure_of_db(
                "Georgia",
                31,
                "00.00.00-5",
                "2022-07-10"
            )
        )                
    
    def _select_infs_of_user(self):
        self._before_data_structure['name'] = list(map(lambda element: element["name"], self._users))
        self._before_data_structure['age'] = list(map(lambda element: element["age"], self._users))
        self._before_data_structure['document'] = list(map(lambda element: element["document"], self._users))
        self._before_data_structure['data_record'] = list(map(lambda element: element["data_record"], self._users))

    def _build_pandas_structure(self):
        self._pd_structure = pd.DataFrame(
            data=self._before_data_structure
        )

    def _write_csv_file(self):
        self._pd_structure.to_csv("file.csv")

    def _structure_of_db(self, name, age, document, data_record):
        return {
            "name": name,
            "age": age,
            "document": document,
            "data_record": data_record
        }



user_infs = get_user_infs()
user_infs.execute()
```