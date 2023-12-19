import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidations } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidations.createAcademicFacultyValidation),
  AcademicFacultyController.createAcademicFaculty,
);

router.get('/', AcademicFacultyController.getAcademicFaculties);

router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);

router.patch('/:facultyId', AcademicFacultyController.updateAcademicFaculty);
export const AcademicFacultyRoutes = router;
