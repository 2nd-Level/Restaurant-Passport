const express = require('express');
const helmet = require('helmet')
const cors = require('cors');


const usersRouter = require('../users/usersRouter.js');
const citiesRouter = require('../cities/citiesRouter');
const userCityRouter = require('../user_city/userCityRouter');
const authRouter = require('../auth/authRouter.js');
const restaurantsRouter = require('../restaurants/restaurantsRouter.js');

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/cities', citiesRouter);
server.use('/api/usercity', userCityRouter);
server.use('/api/restaurants', restaurantsRouter);

server.get('/', (req, res)  => {
        res.send('This Is A Node Server, No data No nothing on it but this message');
});


module.exports = server;