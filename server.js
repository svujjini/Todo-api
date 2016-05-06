var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Homework',
	completed: false
}, {
	id: 2,
	description: 'finish lecture',
	completed: false
}, {
	id: 3,
	description: 'get a job',
	completed: true
}];

app.get('/', function (req,res){
	res.send('Todo API Root');
});

app.get('/todos', function(req,res) {
   res.json(todos);
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
})	