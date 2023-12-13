import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.CreateAcademicSemesterIntoDB(
    req.body,
  );
  console.log({ result });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semester is created successfully',
    data: result,
  });
});
const getAcademicSemesters = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrive All Academic Semesters',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const semesterId = req.params.id;
  const result =
    await academicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved specified semester',
    data: result,
  });
});
export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
};
