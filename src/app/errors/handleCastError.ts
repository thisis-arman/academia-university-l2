import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorReturn } from '../interface/error';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorReturn => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validations Error',
    errorSources,
  };
};
