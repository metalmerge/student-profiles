const Student = require("../models/Student");
const fs = require("fs");
if ( fs.existsSync("config/importantPng.png")){
module.exports = {
	addStudent: async function(studentObj) {
    if (validateStudent(studentObj)) {
        guardianPhoneDeformated = studentObj.guardianPhone.replaceAll('(',"");
        guardianPhoneDeformated = guardianPhoneDeformated.replaceAll(')',"");
        guardianPhoneDeformated = guardianPhoneDeformated.replaceAll('-',"");
        guardianPhoneDeformated = guardianPhoneDeformated.replaceAll('+',"");
        guardianPhoneDeformated = guardianPhoneDeformated.replaceAll(' ',"");
        studentPhoneDeformated = studentObj.phone_number.replaceAll('(',"");
        studentPhoneDeformated = studentPhoneDeformated.replaceAll(')',"");
        studentPhoneDeformated = studentPhoneDeformated.replaceAll('-',"");
        studentPhoneDeformated = studentPhoneDeformated.replaceAll('+',"");
        studentPhoneDeformated = studentPhoneDeformated.replaceAll(' ',"");
        const newStudent = new Student({
          first_name: studentObj.first_name,
          last_name: studentObj.last_name,
          grade: studentObj.grade,
          school: studentObj.school,
          email: studentObj.email,
          phone_number: studentObj.studentPhoneDeformated,
          dateOfBirth: studentObj.dateOfBirth,
          guardianPhone: studentObj.guardianPhoneDeformated,
          guardianEmail: studentObj.guardianEmail,
          notes: studentObj.notes,
          interestsAndHobies: studentObj.interestsAndHobies,
          id_number: `${studentObj.last_name}.${ await module.exports.getLastNameCount(studentObj.last_name)}`,
          program_list: studentObj.program_list,
          status: "active",
      
      });
      await newStudent.save();
    }
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
    if (validateStudent(newStudentObj)) {

    let studentSchool = studentId.school
    if (studentId.school == "other"){
      studentSchool = studentId.other_school 
    }

    guardianPhoneDeformated = newStudentObj.guardianPhone.replaceAll('(',"");
    guardianPhoneDeformated = guardianPhoneDeformated.replaceAll(')',"");
    guardianPhoneDeformated = guardianPhoneDeformated.replaceAll('-',"");
    guardianPhoneDeformated = guardianPhoneDeformated.replaceAll('+',"");
    guardianPhoneDeformated = guardianPhoneDeformated.replaceAll(' ',"");
    studentPhoneDeformated = newStudentObj.phone_number.replaceAll('(',"");
    studentPhoneDeformated = studentPhoneDeformated.replaceAll(')',"");
    studentPhoneDeformated = studentPhoneDeformated.replaceAll('-',"");
    studentPhoneDeformated = studentPhoneDeformated.replaceAll('+',"");
    studentPhoneDeformated = studentPhoneDeformated.replaceAll(' ',"");

    newStudentObj['guardianPhone'] = guardianPhoneDeformated;
    newStudentObj['phone_number'] = studentPhoneDeformated;

    await Student.findOneAndUpdate({
      _id: studentId
    },
    newStudentObj,
    {
      runValidators: true
    });
    }
	},

	deleteStudentById: async function(studentId) {
    await Student.findOneAndRemove({
      _id: studentId
    });
	},

}
  function validateStudent(student) {
    let format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!student.email.toLowerCase().match(format) || !student.guardianEmail.toLowerCase().match(format)) {
      return false;
    }
    if (!student.first_name || !student.last_name || !student.grade || !student.school || !student.email || !student.phone_number || !student.dateOfBirth || !student.guardianPhone || !student.notes) {
      return false;
    }

    return true;
  }
}