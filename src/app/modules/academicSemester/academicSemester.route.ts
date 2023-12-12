import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.CreateAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemesterIntoDB,
);

export const academicSemesterRoutes = router;
