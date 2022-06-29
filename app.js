const express = require('express');
const hostname = 'localhost';
const port = 8080;

const index = require('./routes/index');
const student = require('./routes/student');

let app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', index.getHomePage);
app.get('/add', student.addStudentPage);
app.get('/edit/:id', student.editStudentPage);
app.get('/delete/:id', student.deleteStudent);
app.post('/add', student.addStudent);
app.post('/edit/:id', student.editStudent);

function listenCallback() {
	console.log(`Server Running on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);