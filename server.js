const net = require('net');

const servers = [
  // { ip: '192.0.6.201', port: 8899 },
  // { ip: '192.0.160.109', port: 8899 },
  // { ip: '192.0.160.105', port: 8899 },
  { ip: '192.168.2.31', port: 8899 },
];

servers.forEach(server => {
  const client = new net.Socket();
  client.connect(server.port, server.ip, () => {
    console.log(`Connected to ${server.ip}:${server.port}`);

    client.on('data', data => {
      console.log(`Received data from ${server.ip}:${server.port}: ${data.toString()}`);
    });

    client.on('error', error => {
      console.error(`Error connecting to ${server.ip}:${server.port}: ${error.message}`);
    });
  });
});
