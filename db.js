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
      id_number: `${lastName}.${getLastNameCount(studentObj.last_name)}`
>>>>>>> 7e4c5bf (db changes)
    });
    console.log(newStudent)
    await newStudent.save();
	},
<<<<<<< HEAD
  getLastNameCount: async function(lastName) {
    return await Student.find({last_name : lastName}).countDocuments() + 1 
=======
  getLastNameCountt: async function(lastName) {
	  return await Student.find({last_name : lastName});
>>>>>>> 7e4c5bf (db changes)
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