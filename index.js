let express = require('express');
let app = express();

app.listen(3000, () => {
  console.log("Node server is running on port 3000");
});

app.get("/userdata", (req, res) => {
  res.send("Hello, this is userdata response!"); // Sending a response
});