Abra o terminal e execute os seguintes comandos pip: 

```
 pip install mysql-connector-python
 
  pip install flask
```

Depois disso, suba o mysql e execute os seguintes comandos

```
create database api;
use api;
create table name (
	id_name integer primary key auto_increment,
	nome varchar(255)
)
;
select * from name;
insert into name (nome) values ('Teste');
select * from name;
```


Crie um arquivo python, codifique o seguinte código: 
```
from flask import *
import mysql.connector



app = Flask(__name__)

@app.route('/', methods=['GET'])
def go_home():
    mydb = mysql.connector.connect(
    host="localhost",
    port="3307",
    user="root",
    password="",
    database="api"
    )

    mycursor = mydb.cursor()

    mycursor.execute("SELECT * FROM name")

    myresult = mycursor.fetchall()
    return jsonify({
        "app":myresult
    })

if __name__ == '__main__':
    app.run(port=8888)
    
 ```
