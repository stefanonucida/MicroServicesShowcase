const {queueConnectionUrl, queueName} = require('./queueInformations.js') 
const {nosqlConnectionUrl, nosqlDbName, nosqlCollectionName} = require('./nosqlInformations.js') 

const amqp = require('amqplib')
const { MongoClient, MongoServerError } = require("mongodb");  

async function startListening()
{
  try { 
    const connection = await amqp.connect(queueConnectionUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName); 
    channel.consume(queueName, async message => {  
      console.log(`Consumed message: ${message.content.toString()}`);
      await writemessageondb(message.content.toString());
      channel.ack(message); 
    })
    console.log(`Waiting for messages...`);
  } catch (ex) {
    console.error(ex);
    res.status(500).send('error: '+ ex);
  }
}
async function writemessageondb(message)
{
  const client = new MongoClient(nosqlConnectionUrl);
  await client.connect();
  const collection = client.db(nosqlDbName).collection(nosqlCollectionName); 
  try {
    var toInsert = { insertDate: new Date(), message:message }
    await collection.insertOne(toInsert); 
  } catch (error) {
    console.log(`Error worth logging: ${error}`); // special case for some reason
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
  }
}


startListening()


//sottoscrivere dal localhost:5672 ad una coda con un nome fisso.



//all'interno del message received scrivere su mongodb