// This is our main file to launch the game client
const net = require('net');

const connect = () => {
  const client = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  client.setEncoding('utf8');

  client.on('data', (message) => {
    console.log(`Server said ${message}`);
  })

  client.on('connect', () => {
    console.log("You're now connected to the Server!");
  })

  return client;
}

console.log('Connecting ...');
connect();