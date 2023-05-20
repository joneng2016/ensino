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
    