// This is our main file to launch the game client
const net = require('net');
const {connect} = require('./client');
console.log('Connecting ...');
connect();