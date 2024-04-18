import mongoose from "mongoose"

import StudentsSchema from "../schemas/students.js"
import ResponsiblesSchema from "../schemas/responsibles.js"

import StudentsResponsiblesModel from "./StudentsResponsibles.js"

const students = mongoose.model("students", StudentsSchema)
const responsibles = mongoose.model("responsibles", ResponsiblesSchema)

class AuthenticationModel {
    async signup(data, responsibleExists) {
      try {
        const student = await new students(data.student).save()

        if(responsibleExists === "true") {
          return await StudentsResponsiblesModel.create(student._id, data.responsible._id)
        }

        const responsible = await new responsibles(data.responsible).save()
      
        await StudentsResponsiblesModel.create(student._id, responsible._id)

      } catch (error) {
        console.log(`Failed to register student: ${error}`)
      }
    }
}
  
export default new AuthenticationModel