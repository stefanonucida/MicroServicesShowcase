const queueName = 'microservice-queue' 
const queueContainerName = 'host.docker.internal:5672'
const queueProtocolName = 'amqp'
const queueConnectionUrl = `${queueProtocolName}://${queueContainerName}`  
module.exports = {queueConnectionUrl, queueName}