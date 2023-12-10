import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.validation';

//! Notes- this is higher order function receive a async function which  resolve the response and handle the error , send the error to the global error handler
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const students = await studentServices.getALLStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Getting students Data',
      data: students,
    });
  },
);

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
