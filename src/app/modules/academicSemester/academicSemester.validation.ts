import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constant';

const academicSemesterValidation = z.object({
  name: z.enum([...academicSemesterName] as [string, ...string[]]),
  code: z.enum([...academicSemesterCode] as [string, ...string[]]),
  year: z.date(),
  startMonth: z.enum([...months] as [string, ...string[]]),
  endMonth: z.enum([...months] as [string, ...string[]]),
});

export default academicSemesterValidation;
