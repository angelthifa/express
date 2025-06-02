var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
request('https://api.openweathermap.org/data/2.5/weather?lat=35.6828387&lon=139.7594549&appid=9462d76100c81289b7f9db53097b19f8', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;