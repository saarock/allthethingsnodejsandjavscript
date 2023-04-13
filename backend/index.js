const express =  require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const https = require('https');
const fs = require('fs')
const http = require('http');
const {Server} = require('socket.io')
const jwt = require('jsonwebtoken')
const {userJoin, getCurrentUser}  = require('./an')
const {Message} = require('./database/sechma');
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods: ['GET', 'POST']
    
      }
})









//userid array;
let users = [];

const addUser = (userId, socketId) => {
  console.log(userId, "The main user Id");
!users.some((users) => users.userId == userId) &&
users.push({userId, socketId});
}


// Remove users;

const  removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
  if(userId) {
  return users.find(userrr=> users.userId === userrr)
  } else {
    // console.log('Not user is Available...')
  }
}



  // Run when client get connects
io.on('connection', (socket) => {
// console.log('a user is Connected...')



// Take userid and socketid  from client;
socket.on('addUser', userId => {
addUser(userId, socket.id)

io.emit('getUsers', users)
})




// Send the messgae
socket.on('sendMessage', ({senderId, reciverId, text}) => {

console.log(senderId, "This is the sender id...", reciverId)
  io.to(senderId).emit('ownmessage', text, senderId)
const user = getUser(reciverId);
// console.log(user, 'This is lm');
// console.log('Staring');
if(user) {
  // console.log(user, "USER USER USER")
io.to(user.socketId).emit('getMessage',{
  senderId,
  text
})
} else {
  // console.log('No socket id is given')
}









  // console.log('This is the text', text, "To", reciverId)
  // console.log(senderId, "This is the sender ID")
let message = new Message ({
  sender:senderId,
  receiver: reciverId,
  text: text 
});

message.save().then(() => {
  // console.log('Message is Saved')
}).catch((eror) => {
  // console.log(error)
});


//   io.to(senderId).emit('ownmessage', text)
// const user = getUser(reciverId);
// console.log(user, 'This is lm');
// if(user) {
// io.to(user.socketId).emit('getMessage',{
//   senderId,
//   text
// })
// } else {
  // console.log('No socket id is given')
// }
} )


socket.on('disconnect', () => {
  // console.log('A user is Disconnected..')
  removeUser(socket.id)

  io.emit('againUser', users)
})
})







const bodyParser = require('body-parser');
const { disconnect } = require('process');
const { compareSync } = require('bcrypt');
const { error } = require('console');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json({ limit: '50000mb' }));
app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true }));
app.use(bodyParser.json())
 require('dotenv').config({path: __dirname+ '/dot.env'});

let static = path.join(__dirname, './images/uploads/')
app.use(express.static(static))
console.log(static)
const PORT = process.env.PORT

const templatePath = path.join(__dirname, './templates/views');
const particles = path.join(__dirname, './templates/particles');
app.set('view engine' , 'hbs');
app.set('views', templatePath);
hbs.registerPartials(particles);
require('./database/conn');




// Using middleaware which is buit-in and thirdparty
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./router'))
app.use(require('./chatuser/router'))

server.listen(PORT, async () => {
    try {
        // console.log('Done'+ PORT);
    } catch(error) {
        // console.log(error, "This is the main error")
    }

})