import express, { NextFunction, Request, Response } from 'express';

import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

//create student route
router.post('/create-student', UserControllers.createStudent);

//get all students route
// router.get('/', studentControllers.getAllStudents)

// get a single student route
// router.get('/:studentId', studentControllers.getSingleStudent)

export const UserRoutes = router;
