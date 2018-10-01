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

//330sec
//This makes the most sense to me as opposed to setting flags
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
    // console.log(!stream.write(entry + '\n', i++))
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

//299sec
// write();
// function write() {
//   let ok = true;
//   do {
//     let entry = [
//       i, 
//       faker.company.companyName(),
//       faker.commerce.productName(),
//       `$${faker.finance.amount()}`,
//       (Math.random() * 5).toFixed(1),
//       Math.floor(Math.random() * 1000),
//       `https://picsum.photos/300/300/?image=${Math.ceil(Math.random() * 1084)}`
//     ]
//     entry = entry.join('\t');
//     // console.log(!stream.write(entry + '\n', i++))
//     // if (!stream.write(entry + '\n', i++)) {
//     //   return;
//     // }
//     i++;
//     if (i % 1000000 === 0) {
//       console.log(`Wrote ${i} records to file`);
//     } 
//     if (i === 10000000) {
//       stream.write(entry + '\n')
//       stream.end();
//     } else {
//       ok = stream.write(entry + '\n')
//     }
//   } while(i < 10000000 && ok); 
//   if (i < 10000000) {
//     // had to stop early!
//     // write some more once it drains
//     stream.once('drain', () => {
//       write()
//     });
//   }
// }

stream.on('finish', () => {
  var end = now();
  console.log('Generating data took, ', (end-start)/1000, 'sec');
});