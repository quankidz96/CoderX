const request = require('request');
console.time('Time');
request('https://randomuser.me/api/', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body);
});
console.timeEnd('Time');

