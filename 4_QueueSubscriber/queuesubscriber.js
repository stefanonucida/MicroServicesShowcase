import {queueConnectionUrl, queueName} from '../3_QueueSystem/queueInformations'

const amqp = require('amqplib')
const { MongoClient } = require("mongodb"); 
const uri =
  "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority"; 

//sottoscrivere dal localhost:5672 ad una coda con un nome fisso.



//all'interno del message received scrivere su mongodb