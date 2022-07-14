const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Student = require("../models/Student");

const ProgramSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  min_grade_level: {
    type: String,
    enum: ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "College Freshman", "College Sophmore", "College Junior", "College Senior"],
    required: true
  },
  max_grade_level: {
    type: String,
    enum: ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "College Freshman", "College Sophmore", "College Junior", "College Senior"],
    required: true
  },
  program_id_number: {
    type: String,
    required: true
  },
  student_list: {
    type: [String], 
    // [Student.id_number],
    // enum:[id_number, note],
    required: true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    required: true
  }
});

module.exports = Program = mongoose.model("programs", ProgramSchema);