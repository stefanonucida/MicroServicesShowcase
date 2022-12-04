const {queueConnectionUrl, queueName} = require('./queueInformations.js') 

const express = require('express')
const amqp = require('amqplib')

const app = express()
const port = 3000 

app.get('/', (req, res) => {
  var message = `Hello World From QueuePublisher! ${new Date()}`;
  console.log(message);
  res.send(message);
})  

app.get('/sendmessagetoqueue', async (req, res) => {
  try {
    var messageToQueue = `New Message For Queue Received ${new Date()}`
    const msgBuffer = Buffer.from(messageToQueue);
    console.log(messageToQueue);
    const connection = await amqp.connect(queueConnectionUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, msgBuffer);
    console.log("Sending message to number queue");
    await channel.close();
    await connection.close();
    console.log("message sent");
    res.status(200).send(JSON.stringify({result: "message sent"}));
  } catch (ex) {
    console.error(ex);
    res.status(500).send('error: '+ ex);
  }
}) 

app.listen(port, () => {
  console.log(`Queue Publisher is listening on port ${port}`)
})