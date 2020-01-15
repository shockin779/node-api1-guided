const express = require('express');
const db = require('./data/hubs-model.js');

const server = express();

server.listen(4000, () => {
    console.log('*** listening on port 4000');
})

server.get('/', (req, res) => {
    res.send('hello world!');
})

server.get('/now', (req, res) => {
    res.send(new Date().toISOString());
})

// CRUD

//--------------------------------------------------------------------------------------------
// retrieve info from the db
//--------------------------------------------------------------------------------------------
server.get('/hubs', (req, res) => {
    db.find()
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(err => {
            res.status(500).json({success: false, err})
        })
})