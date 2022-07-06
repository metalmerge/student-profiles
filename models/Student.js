const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  id_number: {
    type: String,
    required: true
  },
  status: {
    type: String,
<<<<<<< HEAD
    enum: ["active", "inactive"],
=======
>>>>>>> f81c606 (Changed delete and added reactivate button)
    required: true
  }
});

module.exports = Student = mongoose.model("students", StudentSchema);