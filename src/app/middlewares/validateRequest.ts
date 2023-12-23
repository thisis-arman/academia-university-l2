import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  console.log('From validate request');
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('From validate request inside try');

      // validation check
      //if everything allright next() ->
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
