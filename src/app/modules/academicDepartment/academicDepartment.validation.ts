import { z } from 'zod';

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be string',
      required_error: 'Department must be required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic department must be ID',
      required_error: 'Faculty reference  must be required',
    }),
  }),
});
const UpdateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic department must be string',
        required_error: 'Department must be required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic department must be ID',
        required_error: 'Faculty reference  must be required',
      })
      .optional(),
  }),
});

export const academicDepartmentValidations = {
  createAcademicDepartmentValidation,
  UpdateAcademicDepartmentValidation,
};
