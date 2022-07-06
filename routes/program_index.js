const db = require("../program_db");

module.exports = {
	getProgramPage: async function (request, response) {
		let programList = await db.getProgramsList();
		let result = [];
		for (let i = 0; i < programList.length; i++) {
			result.push(programList[i]);
		}

		let renderData = {
			programs: result
		}

		response.render('program_index', renderData);
	},
	
};