const Student = require("./models/Student");

module.exports = {
	addStudent: async function(studentObj) {
    const newStudent = new Student({
      first_name: studentObj.first_name,
      last_name: studentObj.last_name,
      grade: studentObj.grade,
      school: studentObj.school,
<<<<<<< HEAD
      email: studentObj.email,
      phone_number: studentObj.phone_number,
      date_of_birth: studentObj.DOB,
      guardian_phone_number: studentObj.gPhone,
      guardian_email: studentObj.gEmail,
      notes: studentObj.notes,
      hobies_or_interests: studentObj.interests,
      id_number: `${studentObj.last_name}.${ await module.exports.getLastNameCount(studentObj.last_name)}`,
      status: "active"
      
=======
      id_number: `${studentObj.last_name}.${ await getLastNameCount(studentObj.last_name)}`
>>>>>>> 2b64eb3 (fix)
    });
    console.log(newStudent)
    await newStudent.save();
	},
  getLastNameCount: async function(lastName) {
    return await Student.find({last_name : lastName}).countDocuments() + 1 
	},
	getStudentsList: async function() {
	  return await Student.find({});
	},

	getStudentById: async function(studentId) {
    return await Student.findOne({
      _id: studentId
    });
	},

	editStudentById: async function(studentId, newStudentObj) {
    await Student.findOneAndUpdate({
      _id: studentId
    },
    newStudentObj,
    {
      runValidators: true
    });
	},

	deleteStudentById: async function(studentId) {
    await Student.findOneAndRemove({
      _id: studentId
    });
	}
}