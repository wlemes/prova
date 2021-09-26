const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
app.use("/public",express.static('./public/'))
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , "/index.html"));
});
app.get('/tela2', function (req, res) {
  res.sendFile(path.join(__dirname , "/tela2.html"));
});
app.listen(port);