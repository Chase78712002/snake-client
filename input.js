const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, SAY_KEY} = require('./constants');
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

let connection;


const setupInput = (client) =>{
  connection = client;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
    switch(key) {
      case "w": connection.write(MOVE_UP_KEY) ; break;
      case "s": connection.write(MOVE_DOWN_KEY); break;
      case "a": connection.write(MOVE_LEFT_KEY); break;
      case "d": connection.write(MOVE_RIGHT_KEY); break;
      case "p": connection.write(SAY_KEY); break;
    }
  })
  return stdin;
}

module.exports = {
  setupInput,
}