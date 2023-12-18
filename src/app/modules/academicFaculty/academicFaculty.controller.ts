import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFaculty } from './academicFaculty.model';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const facultyData = req.body;
  const result =
    await AcademicFacultyServices.createAcademicFacultyIntoDB(facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
};
