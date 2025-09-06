// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*############################################################################# */

//Main code for response from API (fully implemented by A C Govardhan)


// Route for current timestamp if no date is provided
// Responds with JSON containing Unix time and UTC string

app.get("/api/", function(req, res){
  let now = new Date();
  res.json({unix: now.getTime(), utc: now.toUTCString()})
})

// Route for timestamp based on provided date or Unix timestamp

app.get("/api/:date", function (req, res) {
  const dateString = req.params.date;
  let date;
  if(isNaN(Number(dateString)))
  {
    date = new Date(dateString)
  }
  else{
    date = new Date(Number(dateString))
  }

  if(date.toString() === "Invalid Date")
  {
    return res.json({error : "Invalid Date"})
  }
  
  res.json({unix: date.getTime(), utc: date.toUTCString()})
});

/*######################################################################## */

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
