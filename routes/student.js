const db = require("../db");

module.exports = {
	addStudentPage: function (request, response) {
		let renderData = {
			student: {},
			add: true
		};

		response.render('edit-student', renderData);
	},

	addStudent: async function (request, response) {
		await db.addStudent(request.body);

		response.redirect('/')
	},

	editStudentPage: async function (request, response) {
		let studentId = request.params.id;
		let studentObj = await db.getStudentById(studentId);

		let renderData = {
			student: studentObj,
			add: false
		};

		response.render('edit-student', renderData);
	},

	editStudent: async function (request, response) {
		let studentId = request.params.id;
		await db.editStudentById(studentId, request.body);

		response.redirect('/');
	},

	deleteStudent: async function (request, response) {
		let studentId = request.params.id;
		let studentObj = await db.getStudentById(studentId);

		studentObj['status'] = 'inactive';
		await db.editStudentById(studentId, studentObj);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
		
		//await db.deleteStudentById(studentId);
>>>>>>> f81c606 (Changed delete and added reactivate button)
=======
>>>>>>> 8face17 (Inactive students no longer show up on index)
=======
		
		//await db.deleteStudentById(studentId);
>>>>>>> d37fc96 (Changed delete and added reactivate button)

		response.redirect('/');
	},

	reactivateStudent: async function (request, response) {
		let studentId = request.params.id;
		let studentObj = await db.getStudentById(studentId);

		studentObj['status'] = 'active';
		await db.editStudentById(studentId, studentObj);

		response.redirect('/');
	}
};