const db = require("../program_db");

module.exports = {
	getProgramPage: async function (request, response) {
		let programList = await db.getProgramsList();
		let renderData = {
			programs: programList
		}

		response.render('program_index', renderData);
	},
	
};