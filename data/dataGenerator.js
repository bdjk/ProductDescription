const faker = require('faker');
const fs = require('fs');
const path = require('path');
const now = require('performance-now');
// const Products = require('./products.js');

var filename = "./10M.tsv";
var tsvPath = path.resolve(path.join(__dirname, "", filename));

var start = now();

var stream = fs.createWriteStream(tsvPath, {'flags': 'a'});

var i = 0;

function write() {
  while (i < 10000000) {
    let entry = [
      i, 
      faker.company.companyName(),
      faker.commerce.productName(),
      `$${faker.finance.amount()}`,
      (Math.random() * 5).toFixed(1),
      Math.floor(Math.random() * 1000),
      `https://picsum.photos/300/300/?image=${Math.ceil(Math.random() * 1084)}`
    ]
    entry = entry.join('\t');
    if (!stream.write(entry + '\n', i++)) {
      return;
    }
    if (i % 1000000 === 0) {
      console.log(`Wrote ${i} records to file`);
    } 
  }
  stream.end();
}

stream.on('drain', function() {
  write();
});
write();

stream.on('finish', () => {
  var end = now();
  console.log('Generating data took, ', (end-start)/1000, 'sec');
});