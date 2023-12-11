import { Schema } from 'mongoose';
import { TAcademicSemester, TMonths } from './academicSemester.interface';

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

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: 'string',
    enum: ['Autumn', 'Summer', 'Fall'],
    required: true,
  },
  code: {
    type: 'string',
    required: true,
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
});

export default academicSemesterSchema;
