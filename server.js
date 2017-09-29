const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const port = 3000;

app = express();

app.use(bodyParser.json());
app.use(cors());

const usersCtrl = require('./usersCtrl');

app.get('/api/users', usersCtrl.getUsers)
app.get('/api/users/:id', usersCtrl.getUsersId)
app.get('/api/admins', usersCtrl.getAdmins)
app.get('/api/nonadmins', usersCtrl.getNonAdmins)
app.get('/api/user_type/:type', usersCtrl.getUserByTypes)

app.put('/api/users/:id', usersCtrl.putUser)

app.post('/api/users', usersCtrl.postUser)

app.delete('/api/users/:id', usersCtrl.deleteUser)






app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})