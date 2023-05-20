# ADO2

* Instale Python3 em seu computador
* Instale o pip3 em seu computador
* Por meio do pip3, instale o flask
* Monte o seguinte serviço

```
from flask import *

import random
import time

app = Flask(__name__)

@app.route('/', methods=['GET'])
def go_home():
    aleatory_time = (random.randint(1,3))/10 
    time.sleep(aleatory_time)

    return jsonify({
        "success":True,
        "time":aleatory_time
    })

if __name__ == '__main__':
    app.run(port=8888)
```


* Faça um teste com 100 requests e um delay de 0.3 segundos
* Forneça a curva de carga do teste
* Forneça o JSON de resposta do teste