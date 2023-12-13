import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find({});
  return result;
};
const getSingleAcademicSemesterFromDB = async (id) => {
  const result = await AcademicSemester.find({});
  return result;
};

export const academicSemesterServices = {
  CreateAcademicSemesterIntoDB,
  getAcademicSemestersFromDB,
};
