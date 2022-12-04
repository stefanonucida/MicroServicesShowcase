const express = require('express') 
const http = require('http') 

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var message = `Hello World From BackendForFrontend! ${new Date()}`;
  console.log(message);
  res.send(message);
})  

app.get('/fromFE', async (req, res) => { 
  let data = "";  
  console.log("parte chiamata per dal"); 
  try 
  { 
      http.get('http://queue-publisher:3000/sendmessagetoqueue', (resp) => 
      {  
        console.log("ricevuta risposta");
        resp.on('data', (chunk) => { data += chunk; }); 
        resp.on('end', ()=>{  
          console.log('fine ricezione')
          var asString = JSON.parse(data);
          console.log(asString.explanation) 
          console.log(asString); 
        });    
      }).on("error", (err) => 
      {
        console.log("Error: " + err.message);
        data = err.message;
      });
  } 
  catch (error) 
  { 
    data = error;
  } 
  res.send('messaggio ricevuto correttamente')
}) 

app.listen(port, () => {
  console.log(`BFF is listening on port ${port}`)
})