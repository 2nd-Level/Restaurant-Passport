const express =require('express');

const server =express();

server.use(express.json())

server.get('/', (req, res)  => {
        res.send('This Is A Node Server, No data No nothing on it but this message');
});


module.exports = server;