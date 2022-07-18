const program = require("../models/Program")

module.exports = {
	addProgram: async function(programObj) {
    const newprogram = new program({
        title: programObj.title,
        description: programObj.description,
        location: programObj.location,
        start_date: programObj.start_date,
        end_date: programObj.end_date,
        min_grade_level: programObj.min_grade_level,
        max_grade_level: programObj.max_grade_level,
        program_id_number: `${programObj.title}.${ await module.exports.getTitleCount(programObj.title)}`,
        student_list: programObj.student_list,
        status: "active"
      });
    await newprogram.save()
	},
  getTitleCount: async function(currentTitle) {
	  return await program.find({title : currentTitle}).countDocuments() + 1 
	},
  
	getProgramsList: async function() {
	  return await program.find({});
	},

	getProgramById: async function(programId) {
    return await program.findOne({
      _id: programId
    });
	},

	editProgramById: async function(programId, newprogramObj) {
    await program.findOneAndUpdate({
      _id: programId
    },
    newprogramObj,
    {
      runValidators: true
    });
	},
}