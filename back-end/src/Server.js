const express = require('express');
const pg = require("pg");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const connectionString = "postgres://postgres:salasana@localhost:5432/ToDo";

var config = {
	user: 'postgres',
	database: 'ToDo',
	password: 'salasana',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
};

app.use(cors()); // Express delete toiminto vaatii

app.use(bodyParser.json());  // Ei ymmärrä muuten dataa Requestissa

app.use(express.static(path.join(__dirname, 'build')));

app.delete('/delete/:id', function(request, response) {
	var id = request.params.id;
	console.log("Serverissä: DELETE ");
	console.log(id);
	var pool = new pg.Pool(config);
	pool.connect(function(err, client, done) {
		if(err) {
			console.log("not able to get connection "+ err);
			return response.status(400).send(err);
		} else {
			client.query('DELETE FROM "Task" WHERE id = $1' , [id], function(err, result) {
				done();
				if(err) {
					return response.status(400).send(err)
				} else {
					return response.status(200).send({message: 'success in delete record'})
					console.log("Delete succeeded");
				}
			})
		};
		pool.end();
	});
});

app.get('/list', function(request, response, next) {
	console.log('Serverissä: LIST');

	//let data = [ 
	//			{"id"     : "1",
	//              "name"  : "Clean room",
	//              "owner" : "Matti"
	//              },
	//             
	//              {
	//               "id"    : "2",
	//               "name"  : "Wash car",
	//               "owner" : "Marko"
	//              }
	//   		];
	var pool = new pg.Pool(config);

	pool.connect(function(err,client,done){
		if(err){
			console.log("not able to get connection "+ err);
			response.status(400).send(err);
		}
		client.query('SELECT * FROM "Task" ORDER BY schedule',function(err, result)  {
			done();
			if(err) {
				console.log("not able to query data" + err);
				response.status(400).send(err);
			}
			//console.log(result.rows);
			response.status(200).send(result.rows);
		});
		pool.end();
	});
});

app.post('/insert', function(request, response, next){
	console.log('Serverissä: POST');
	console.log(request.body);
	//console.log("---------------------");
	var name 	= request.body.name;
	var owner 	= request.body.owner;
	var schedule = request.body.schedule;
    
	var pool = new pg.Pool(config);
	let values = [ name, owner ];
	pool.connect(function(err,client,done){
		if(err){
			console.log("not able to get connection "+ err);
			response.status(400).send(err);
		} else {
			
			client.query('INSERT INTO  "Task" (name, owner, schedule) VALUES ($1, $2, $3)' ,[name, owner, schedule], function(err, result) {
				done();

				if(err) {
					return response.status(400).send(err);
				} else {
					return response.status(200).send({message: 'success in delete record'})
					console.log('DATA INSERTED');
				}
			})
			
		}
		pool.end();
	});
	
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 8080);
