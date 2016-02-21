var express = require('express');
var watch = require('./server/watch');
var notify = require('./server/notify');

var app = express();
var watcher = watch(changed);
var notifier = notify();

app.use(express.static('client'));
app.use('/uploads', express.static('uploads'));

app.listen(3000);

function changed(path) {
  console.log("Changed: " + path);
  notifier.refresh();
}
