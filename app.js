
const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Tobes, I'm your appsody app!");
});
 
module.exports.app = app;
