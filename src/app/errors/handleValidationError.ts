import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorReturn } from '../interface/error';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorReturn => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  const statusCode = 200;
  return {
    statusCode,
    message: 'Validations Error',
    errorSources,
  };
};
