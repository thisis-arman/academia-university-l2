import { z } from 'zod';

const academicFacultyValidation = z.object({
  name: z.string({ invalid_type_error: 'Academic faculty must be string' }),
});
const UpdateAcademicFacultyValidation = z.object({
  name: z.string({ invalid_type_error: 'Academic faculty must be string' }),
});

export const academicFacultyValidations = {
  academicFacultyValidation,
  UpdateAcademicFacultyValidation,
};
