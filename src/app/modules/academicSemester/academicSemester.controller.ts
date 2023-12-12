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

export const AcademicSemesterControllers = {
  createAcademicSemesterIntoDB: createAcademicSemester,
};
