import mongoose from "mongoose"

import StudentsSchema from "../schemas/students.js"

const students = mongoose.model("students", StudentsSchema)

class StudentsModel {
    async findByEmail(email) {
      try {
        return await students.findOne({ email })
      } catch (error) {
        console.log(`Failed to search for student person by email: ${error}`)
      }
    }
}
  
export default new StudentsModel