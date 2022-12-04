const queueName = 'microservice-queue' 
const queueContainerName = 'rabbitmq'
const queueProtocolName = 'amqp'
const queueConnectionUrl = `${queueProtocolName}://${queueContainerName}`  
export {queueConnectionUrl, queueName}