var express = require('express');
var app = express();

app.use(express.static(__dirname ));
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.listen(process.env.PORT || 3006);
console.log("Server up on port 3006");
console.log(__dirname)