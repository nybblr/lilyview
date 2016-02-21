var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 8080;
var ws = new WebSocketServer({ port: port });

var refresh = function(ws) {
  ws.clients.forEach(function(socket) {
    socket.send('changed');
  });
};

var notifier = function() {
  ws.on('connection', function(socket) {
    console.log('new connection...');
  });

  return {
    refresh: function() { refresh(ws); }
  };
}

module.exports = notifier;
