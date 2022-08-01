const { validate } = require("../models/Program");
const Program = require("../models/Program");
const grades = ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "Out of High School", "College Freshman", "College Sophmore", "College Junior", "College Senior", "Out of College"];

module.exports = {
	addProgram: async function(programObj) {
    if (validateProgram(programObj)) {
      const newprogram = new Program({
        title: programObj.title,
        description: programObj.description,
        location: programObj.location,
        start_date: programObj.start_date,
        end_date: programObj.end_date,
        min_grade_level: programObj.min_grade_level,
        max_grade_level: programObj.max_grade_level,
        program_id_number: `${programObj.title}.${ await module.exports.getTitleCount(programObj.title)}`,
        status: "active"
      });

      await newprogram.save()
    }
	},
  getTitleCount: async function(currentTitle) {
	  return await Program.find({title : currentTitle}).countDocuments() + 1 
	},
	getProgramsList: async function() {
	  return await Program.find({});
	},

	getProgramById: async function(programId) {
    return await Program.findOne({
      _id: programId
    });
	},

	editProgramById: async function(programId, newprogramObj) {
    if (validateProgram(newprogramObj)) {
      await Program.findOneAndUpdate({
        _id: programId
      },
      newprogramObj,
      {
        runValidators: true
      });
    }
	},
}

function validateProgram(program) {
  if (!(grades.indexOf(program.min_grade_level) <= grades.indexOf(program.max_grade_level))) {
    return false;
  }
  if (!program.title || !program.description || !program.location || !program.start_date || !program.end_date || !program.min_grade_level || !program.max_grade_level) {
    return false;
  }

  return true;
}