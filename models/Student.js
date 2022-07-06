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
<<<<<<< HEAD
<<<<<<< HEAD
    enum: ["active", "inactive"],
=======
>>>>>>> f81c606 (Changed delete and added reactivate button)
=======
>>>>>>> d37fc96 (Changed delete and added reactivate button)
=======
    enum: ["active", "inactive"],
>>>>>>> 4f0f649 (slight tweaks)
    required: true
  }
});

module.exports = Student = mongoose.model("students", StudentSchema);