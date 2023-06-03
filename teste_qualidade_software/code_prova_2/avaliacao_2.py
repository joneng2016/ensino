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