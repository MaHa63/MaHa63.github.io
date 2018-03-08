const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/list', function(request, response) {
	console.log('Serverissä, Matti');

	let data = [ 
				{"id"     : "1",
	              "name"  : "Clean room",
	              "owner" : "Matti"
	              },
	             
	              {
	               "id"    : "2",
	               "name"  : "Wash car",
	               "owner" : "Marko"
	              }
	           ];


	return response.send(data);
});


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);