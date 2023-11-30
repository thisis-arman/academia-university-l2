import { NextFunction, Request, Response } from 'express';

const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
