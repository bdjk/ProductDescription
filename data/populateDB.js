const now = require('performance-now');
const { exec } = require('child_process');

let start = now();

// COPY products FROM '/Users/jbui/Documents/github/HRLA/ProductDescription/data/10M.tsv' DELIMITER E'\t';
exec('psql jbui', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stdout);
  }
});

let end = now();
console.log('Populating the DB took ', ((end-start)/1000).toFixed(4), 'sec');