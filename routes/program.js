const db = require("../database/program_db")
const student_db = require("../database/db")
const moment = require('moment');
module.exports = {
	addProgramPage: async function (request, response) {
		let studentList = await student_db.getStudentsList();
		let renderData = {
			program: {},
			students: module.exports.activeStudents(studentList),
			add: true
		};

		response.render('edit-program', renderData);
	},

	addProgram: async function (request, response) {
		await db.addProgram(request.body);

		response.redirect('/program')
	},

	editProgramPage: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);
		let studentList = await student_db.getStudentsList();

		startDate = moment(programObj.start_date);
		endDate = moment(programObj.end_date);

		programObj['start_date_formatted'] = startDate.format('YYYY[-]MM[-]DD[T]hh:mm');
		programObj['end_date_formatted'] = endDate.format('YYYY[-]MM[-]DD[T]hh:mm');

		let renderData = {
			program: programObj,
			students: module.exports.activeStudents(studentList),
			add: false
		};

		response.render('edit-program', renderData);
	},

	editProgram: async function (request, response) {
		let programId = request.params.id;
		await db.editProgramById(programId, request.body);

		response.redirect('/program');
	},
	viewProgramPage: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);
		let studentList = await student_db.getStudentsList();
		let renderData = {
			program: programObj,
			add: false,
			view: true,
			students: programObj.student_list,
		};

		response.render('edit-program', renderData);
	},

	deleteProgram: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);

		programObj['status'] = 'inactive';
		await db.editProgramById(programId, programObj);

		response.redirect('/program');
	},

	reactivateProgram: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);

		programObj['status'] = 'active';
		await db.editProgramById(programId, programObj);

		response.redirect('/program');
	},
	activeStudents: function(studentList) {
		let activeStudents = [];
		for (let i = 0; i < studentList.length; i++) {
			if (studentList[i].status == "active") {
				activeStudents.push(studentList[i]);
			}
		}
		return activeStudents
	},
};