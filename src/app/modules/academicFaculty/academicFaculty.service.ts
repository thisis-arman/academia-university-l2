import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAcademicFaculties = async () => {
  const result = await AcademicFaculty.find({});
  return result;
};

const getSingleAcademicFaculty = async (facultyId: string) => {
  const result = await AcademicFaculty.findOne({ facultyId });
  return result;
};
export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAcademicFaculties,
  getSingleAcademicFaculty,
};
