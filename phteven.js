var express = require('express');
// var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.send('<img src="https://pbs.twimg.com/media/B_h8HN5WwAEC2rn.jpg">');
});

// app.post('/post-test', function(req, res) {
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
