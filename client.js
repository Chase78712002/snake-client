const net = require('net');
const {IP, PORT} = require('./constants');
const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });

  client.setEncoding('utf8');

  client.on('data', (message) => {
    console.log(`Server said ${message}`);
  })

  client.on('connect', () => {
    console.log("You're now connected to the Server!");
    client.write("Name: ALV");
  })

  // Hard coded moving commands===============
    // client.on('connect', () => {
    //   let time = 0;
    //   // while(time < 5000) {
    //   //   setTimeout(() => {
    //   //     client.write("Move: up");
    //   //   }, time);
    //   //   time += 50;
    //   // let moveLeftInterval = setInterval(() => {
    //   //   client.write("Move: left");
    //   //   time += 500;
    //   //   if (time === 5000) {
    //   //     clearInterval(moveLeftInterval);
    //   //   }
    //   // }, 500);
    // })
  return client;
}

module.exports = {
  connect,
}