const db = require("../db");

module.exports = {
	getHomePage: async function (request, response) {
		let result = await db.getStudentsList();

		let renderData = {
			students: result
		}

		response.render('index', renderData);
	}
};