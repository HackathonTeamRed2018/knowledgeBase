const https = require('https');

let from_loc = 'houston'
let to_loc = 'london'

let query = 'https://api.skypicker.com/flights?fly_from=' + from_loc + '&fly_to=' + to_loc + '&limit=5&sort=price&curr=USD';

https.get(query, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    let objdata = JSON.parse(data);
    console.log(objdata.best_results[0].price);
    console.log(objdata.best_results[0].duration);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});