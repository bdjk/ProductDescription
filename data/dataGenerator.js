const faker = require('faker');
const fs = require('fs');
const path = require('path');
const now = require('performance-now');
// const Products = require('./products.js');

var filename = "./10M.tsv";
var tsvPath = path.resolve(path.join(__dirname, "", filename));

let start = now();

var stream = fs.createWriteStream(tsvPath, {'flags': 'a'});

for (let i = 0; i < 10000000; i++) {
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
  stream.write(entry + '\n');
  if (i % 1000000 === 0) {
    console.log(i, "entries have been made");
  }
}

stream.end();
let end = now();
console.log('Generating data took, ', (end-start)/1000, 'sec');