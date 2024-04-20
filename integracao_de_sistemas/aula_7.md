# Aula 7

## Conceito de mensageria e fila

<img src="./figs/figuras/fig1.png" />

<img src="./figs/figuras/fig2.png" />

## Serviços de Mensageira utiliza várias canais

<img src="./figs/figuras/fig3.png" />

## Vários serviços consumem mensageria

<img src="./figs/figuras/fig4.png" />

## Instalação

```
docker pull rabbitmq:3-management
docker run --rm -it -p 8080:15672 -p 5672:5672 rabbitmq:3-management
```


https://www.rabbitmq.com/tutorials/tutorial-one-javascript


```
npm install amqplib
```


## Fazendo o envio

* Crie o arquivo send.js

```
#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
        throw error1;
      }
      var queue = 'hello';
      var msg = 'Hello world';
  
      channel.assertQueue(queue, {
        durable: false
      });
  
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
  });
});
```


## Fazendo a camada que recebe

```
#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'hello';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
    });
  });
});
```