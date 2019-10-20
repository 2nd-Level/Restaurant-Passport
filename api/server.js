const express = require('express');
const helmet = require('helmet')


const usersRouter = require('../users/usersRouter.js');
const citiesRouter = require('../cities/citiesRouter');
const authRouter = require('../auth/authRouter.js');

const server = express();


server.use(helmet());
server.use(express.json())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/cities', citiesRouter)


server.get('/', (req, res)  => {
        res.send('This Is A Node Server, No data No nothing on it but this message');
});


module.exports = server;