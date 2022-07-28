const db = require("../database/program_db");

module.exports = {
	getProgramPage: async function (request, response) {
		let programList = await db.getProgramsList();
		let activeProgram = [];
		for (let i = 0; i < programList.length; i++) {
			if (programList[i].status == "active") {
				programList[i]['start_date_formatted'] = programList[i].start_date.toDateString();
				programList[i]['end_date_formatted'] = programList[i].end_date.toDateString();
				activeProgram.push(programList[i]);
			}
		}
		let renderData = {
			programs: activeProgram,
		}
		response.render('program_index', renderData);

	},
	
};