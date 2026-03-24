const csv = require('csvtojson');
const fs = require('fs');

const input = './data/historias/historias.csv';
const output = './data/historias/historias.json';

csv()
  .fromFile(input)
  .then((jsonArray) => {
    fs.writeFileSync(output, JSON.stringify(jsonArray, null, 2));
    console.log('✅ JSON generado correctamente');
  });