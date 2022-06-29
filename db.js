const uuid = require("uuid");

module.exports = {
	addStudent: async function(studentObj) {
		let newId = "student_" + uuid.v4();
    console.log(newId);
		// await db.set(newId, studentObj);
	},
  
	getStudentsList: async function() {
		// let studentKeys = await db.list("student_");
    let studentKeys = [];
		let students = [];
		
		for (let i = 0; i < studentKeys.length; i++) {
			let currentKey = studentKeys[i];
			// let currentStudent = await db.get(currentKey);
      let currentStudent = {};
			currentStudent["id"] = currentKey;

			students.push(currentStudent);
		}

		return students;
	},

	getStudentById: async function(studentId) {
		// let student = await db.get(studentId);
    let student = {};
		student["id"] = studentId;

		return student;
	},

	editStudentById: async function(studentId, newStudentObj) {
		// await db.set(studentId, newStudentObj);
    console.log("edit student");
	},

	deleteStudentById: async function(studentId) {
		// await db.delete(studentId);
    console.log("delete student");
	}
}