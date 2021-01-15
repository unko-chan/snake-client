let connection;


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  }
  if (input === 'w') {
    console.log(input)
    connection.write('Move: up');
  }
  if (input === 'a') {
    console.log(input)
    connection.write('Move: left');
  }
  if (input === 's') {
    console.log(input)
    connection.write('Move: down');
  }
  if (input === 'd') {
    console.log(input)
    connection.write('Move: right');
  }
};

// setupInput();

module.exports = { setupInput };
