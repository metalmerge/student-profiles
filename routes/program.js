const db = require("../database/program_db");

module.exports = {
	addProgramPage: function (request, response) {
		let renderData = {
			program: {},
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

		let renderData = {
			program: programObj,
			add: false
		};

		response.render('edit-program', renderData);
	},

	editProgram: async function (request, response) {
		let programId = request.params.id;
		await db.editProgramById(programId, request.body);

		response.redirect('/program');
	},

};