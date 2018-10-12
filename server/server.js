const nr = require('newrelic');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const morgan = require("morgan");
const routes = require('./router.js');
const cors = require("cors");
// const cluster = require('cluster')
// const os = require('os')
const port = 4000;

// if (cluster.isMaster) {
//   const cpuCount = os.cpus().length;
//   for (let i = 0; i < cpuCount; i++) {
//     cluster.fork()
//   }
// }
// else {
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  // app.use(morgan('dev'));
  
  app.use('/api', routes);
  
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  
  app.listen(port, function() {
    console.log("Sephora listening on port " + port);
  });
// }

// cluster.on('exit', (worker) => {
//   console.log('mayday! mayday! worker', worker.id, ' is no more!')
//   cluster.fork()
// })