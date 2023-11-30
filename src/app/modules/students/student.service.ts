import { TStudent } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student)
  return result
}

const getALLStudentsFromDB = async () => {
  const result = await StudentModel.find()
  return result
}

const getASingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}
export const studentServices = {
  createStudentIntoDB,
  getALLStudentsFromDB,
  getASingleStudent,
}
