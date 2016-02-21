var path = require('path');
var chokidar = require('chokidar');

var watcher = function(cb) {
  filePath = path.resolve(__dirname, '..', 'uploads', 'lily.pdf');
  console.log("Watching " + filePath);

  return chokidar.watch(filePath).on('all', function(event, path) {
    cb(path);
  });
}

module.exports = watcher;
