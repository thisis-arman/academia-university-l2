import { z } from 'zod';

const academicSemesterValidation = z.object({
  name: z.enum(['Autumn', 'Summer', 'Fall']),
  code: z.enum(['01', '02', '03']),
  year: z.date(),
  startMonth: z.string(),
  endMonth: z.string(),
});

export default academicSemesterValidation;
