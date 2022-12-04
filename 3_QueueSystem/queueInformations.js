const queueName = 'microservice-queue' 
const queueContainerName = 'rabbitmq'
const queueProtocolName = 'amqp'
const queueConnectionUrl = `${queueProtocolName}://${queueContainerName}`  
module.exports = {queueConnectionUrl, queueName}