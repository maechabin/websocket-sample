const server = require('ws').Server;
const s = new server({ port: 5001 });

s.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received: ' + message);

    s.clients.forEach(client => {
      client.send(message + ' : ' + new Date());
    });
  });

  ws.on('close', () => {
    console.log('I lost a client');
  });
});

console.log('WS Server is running: ws://localhost:5001');
