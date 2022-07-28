const db = require("../database/program_db")
const student_db = require("../database/db")
const application_db = require("../database/application_db")
const applicationFile = require("./application")

module.exports = {
	addProgramPage: async function (request, response) {
		let studentList = await student_db.getStudentsList();
		let renderData = {
			program: {},
			students: await module.exports.activeStudents(studentList),
			add: true,
			view: false,
		};

		response.render('edit-program', renderData);
	},

	editProgramPage: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);
		
		let renderData = {
			program: programObj,
			students: await applicationFile.getApplicationsByProgramId(programId),
			add: false,
			view: false
		};

		response.render('edit-program', renderData);
	},

	addProgram: async function (request, response) {
		await db.addProgram(request.body);

		response.redirect('/program')
	},

	editProgram: async function (request, response) {
		let programId = request.params.id
		// let studentIds = request.body.student_list
		
		// let applicationList = await application_db.getApplicationsList()
		// for(let i = 0; i < applicationList.length; i++) {
		// 	await application_db.deleteApplicationByProgramId(programId)
		// }
		// for(let j = 0; j < studentIds.length; j++) {
		// 	await application_db.addApplication(studentIds[j], programId)
		// }
		await db.editProgramById(programId, request.body);
		await module.exports.viewProgramPage(request, response)
	},
	viewProgramPage: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);
		let renderData = {
			program: programObj,
			add: false,
			view: true,
			students: await applicationFile.getApplicationsByProgramId(programId),
		};

		response.render('edit-program', renderData);
	},

	deleteProgram: async function (request, response) {
		let programId = request.params.id;
		let programObj = await db.getProgramById(programId);
		let applicationList = await application_db.getApplicationsList();
		for(let i = 0; i < applicationList.length; i++) {
			if(applicationList[i].program == programId) {
				application[i].status == 'disabled'
			}
		}
		programObj['status'] = 'inactive'
		await db.editProgramById(programId, programObj)

		response.redirect('/program');
	},

	reactivateProgram: async function (request, response) {
		let programId = request.params.id
		let programObj = await db.getProgramById(programId)
		let applicationList = await application_db.getApplicationsList();
		for(let i = 0; i < applicationList.length; i++) {
			if(applicationList[i].program == programId) {
				application[i].status == 'reinstated'
			}
		}
		programObj['status'] = 'active'
		await db.editProgramById(programId, programObj)

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