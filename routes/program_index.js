const db = require("../database/program_db")
const student = require("./student")
module.exports = {
	getProgramPage: async function (request, response) {
		let programList = await db.getProgramsList();
		let renderData = {
			programs: student.activePrograms(programList),
		}
		response.render('program_index', renderData)

	},
	
};