export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorReturn = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
