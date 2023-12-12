import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log('I got the hit ouch!');
    await schema.parseAsync({ body: req.body });
    next();
  };
};
export default validateRequest;
