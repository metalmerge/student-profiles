const db = require("../db");

module.exports = {
	getHomePage: async function (request, response) {
		let studentList = await db.getStudentsList();
		let result = [];
		for (let i = 0; i < studentList.length; i++) {
			if (studentList[i].status == "active") {
				result.push(studentList[i]);
			}
		}

		let renderData = {
			students: result
		}

		response.render('index', renderData);
	}
};