const { Client, DefaultServerChooser } = require('amps');

const INSTANCES = [
  'BTEC GATEWAY',
  'CME GATEWAY',
  'DWEB GATEWAY',
  'BBG GATEWAY',
  'TWB GATEWAY',
  'ESPD GATEWAY',
  'BTEC-1 GATEWAY',
  'CME-1 GATEWAY',
  'DWEB-1 GATEWAY',
  'BBG-1 GATEWAY',
  'TWB-1 GATEWAY',
  'ESPD-1 GATEWAY',
];
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function publish(client) {
  const startTime = Date.now();
  setTimeout(() => {
    client.publish('/sample/perf-matrix', {
      20: randomIntFromInterval(300, 4000000),
      50: randomIntFromInterval(300, 4000000),
      70: randomIntFromInterval(300, 4000000),
      80: randomIntFromInterval(300, 4000000),
      90: randomIntFromInterval(300, 4000000),
      99: randomIntFromInterval(300, 4000000),
      99.9: randomIntFromInterval(300, 4000000),
      instanceName: INSTANCES[randomIntFromInterval(0, INSTANCES.length - 1)],
      publishTs: Date.now(),
      max: randomIntFromInterval(300, 4000000),
      min: randomIntFromInterval(300, 500),
      startTime,
      endTime: 1697528451234567890,
      latencyUnit: 'ns',
      TimeUnit: 'GMT',
    });
    console.log('Published');
    publish(client);
  }, 1000);
}

function start() {
  console.log('Starting');
  const client = new Client('SAMPLE-CLIENT');
  client
    .connect('ws://localhost:9008/amps/json')
    .then(() => {
      console.log('Connected');
      //   client.sowDelete('/sample/perf-matrix', '/instanceName is not null');
      publish(client);
    })
    .catch(console.error);
}

start();
