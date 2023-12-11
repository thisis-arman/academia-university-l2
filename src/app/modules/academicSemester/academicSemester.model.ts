import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonths } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterName,
} from './academicSemester.constant';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: 'string',
      enum: academicSemesterName,
      required: true,
    },
    code: {
      type: 'string',
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: 'string',
      enum: months,
      required: true,
    },
    endMonth: {
      type: 'string',
      enum: months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const academicSemester = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);

export default academicSemesterSchema;
