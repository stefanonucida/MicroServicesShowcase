const nosqlContainerName = 'mongodb'
const nosqlProtocolName = 'mongodb'
const nosqlUsername = 'root'
const nosqlPassword = 'example'
const nosqlConnectionUrl = `${nosqlProtocolName}://${nosqlUsername}:${nosqlPassword}@${nosqlContainerName}/`  
const nosqlDbName = 'MicroServicesDb'
const nosqlCollectionName = 'MicroServicesCollection'
module.exports = {nosqlConnectionUrl, nosqlDbName, nosqlCollectionName}