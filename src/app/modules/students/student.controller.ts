import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';
// import { z } from 'zod';

// import Joi from 'joi';
// import studentValidationSchema from './student.validation';

/* const createStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { students: studentData } = req.body

    const zodParseData = studentValidationSchema.parse(studentData)
    console.log(zodParseData)
    const result = await studentServices.createStudentIntoDB(studentData)
   
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
} */

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await studentServices.getALLStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Getting students Data',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const student = await studentServices.getASingleStudent(studentId);
    res.status(200).json({
      success: true,
      message: 'Get a single student',
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  //   createStudent,
  getAllStudents,
  getSingleStudent,
};
