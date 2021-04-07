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
      case "w": connection.write("Move: up"); break;
      case "s": connection.write("Move: down"); break;
      case "a": connection.write("Move: left"); break;
      case "d": connection.write("Move: right"); break;
      case "p": connection.write("Say: My anaconda don't"); break;
    }
  })
  return stdin;
}

module.exports = {
  setupInput,
}