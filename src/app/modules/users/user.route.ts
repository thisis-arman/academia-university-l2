import express, { NextFunction, Request, Response } from 'express';

import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';

const router = express.Router();
const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      console.log(error);
    }
  };
};
//create student route
router.post('/create-student', UserControllers.createStudent);

//get all students route
// router.get('/', studentControllers.getAllStudents)

// get a single student route
// router.get('/:studentId', studentControllers.getSingleStudent)

export const UserRoutes = router;
