const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/Public'));

app.use(express.urlencoded({extended: true }));
app.use(express.json())

require('./Routes/api')(app);
require('./Routes/view')(app);

app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
  });