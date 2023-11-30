import { Request, Response } from 'express'
import userValidationSchema from './user.validation'
import { UserServices } from './user.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, students: studentData } = req.body

    // const zodParseData = userValidationSchema.parse(studentData)
    // console.log(zodParseData)
    const result = await UserServices.createStudentIntoDB(password, studentData)

    console.log(result)
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get the data',
      data: error,
    })
  }
}

export const UserControllers = {
  createStudent,
}
