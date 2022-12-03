const express = require('express')
const { MongoClient } = require("mongodb"); 
const app = express()
const port = 3000 
const uri =
  "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";


app.get('/', (req,res)=>{ res.send('risposta nodemongo')})

app.get('/writemessage', async (req, res) => {
  const msgBuffer = Buffer.from(JSON.stringify({ number: 10 }));
  try {
    const connection = await amqp.connect("amqp://rabbitmq");
    const channel = await connection.createChannel();
    await channel.assertQueue("number");
    await channel.sendToQueue("number", msgBuffer);
    console.log("Sending message to number queue");
    await channel.close();
    await connection.close();
    console.log("message sent");
    res.send(JSON.stringify({result: "message sent"}));
  } catch (ex) {
    console.error(ex);
    res.send('error: '+ ex);
  }
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})