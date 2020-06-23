const express = require('express');
const ctrl = require('./controllers/messages_controller');


const app = express();

//parsing
app.use(express.json());



//endpoints
//post---create
app.post('/api/messages', ctrl.create);
//get---read
app.get('/api/messages', ctrl.read);
//put---update
app.put('/api/messages/:id', ctrl.update);
//delete
app.delete('/api/messages/:id', ctrl.delete);





//server location

app.listen(3001, () => console.log('Server is running on 3001'));

