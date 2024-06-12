import { Injectable } from '@nestjs/common';
import amqp = require("amqplib/callback_api");

@Injectable()
export class AppService {

  public sendMessage(body: any) {
    const queueName = `${body.userIdSend}${body.userIdReceive}`;

    amqp.connect('amqp://localhost', function(error0, connection) {
      if (error0) {
        throw error0
      }

      connection.createChannel(function(error1, channel) {

        if (error1) {
          throw error1
        }

        
        channel.assertQueue(queueName, {
          durable: false
        });

        channel.sendToQueue(queueName, Buffer.from(body.message))
      })
    })

    return{
      message: 'mesage sended with success'
    }
  }


  public async getMessage(userId) {
    let response = []

    let othersUsersId = [
      1,2,4
    ]

    const possibleQueues = othersUsersId.map(e => `${e}${userId}`)

    for(let i = 0; i < possibleQueues.length; i++) {
      const queueName = possibleQueues[i];

      amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
          throw error0;
        }
        connection.createChannel(function(error1, channel) {
          if (error1) {
            throw error1;
          }
        

          channel.assertQueue(queueName, {
            durable: false
          });


          channel.consume(queueName, function(msg) {
            response.push({
              messeage: msg.content.toString()   
            })

            console.log(response)
          }, {
              noAck: true
          });
        });
      });
    }

    return response
  }
}
