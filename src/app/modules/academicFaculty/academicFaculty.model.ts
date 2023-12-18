import { Schema } from 'mongoose';
import TAcademicFaculty from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

export default academicFacultySchema;
