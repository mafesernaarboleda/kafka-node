var kafka = require('kafka-node');
var Producer = kafka.Producer;
var KeyedMessage = kafka.KeyedMessage;
var Client = kafka.Client;
var client = new Client('localhost:2181');
var producer = new Producer(client, { requireAcks: 1 });

producer.on('ready', function () {
  var message = 'holaaaa putito';
  var keyedMessage = new KeyedMessage('keyed', 'care nepe');

  producer.send([
    { topic: 'pataconf', partition: 0, messages: [message, keyedMessage],  }
  ], function (err, result) {
    console.log(err || result);
    process.exit();
  });
});

producer.on('error', function (err) {
  console.log('error', err);
});
