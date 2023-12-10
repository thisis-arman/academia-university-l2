import { Schema, model } from 'mongoose';
import { Guardian, TStudent, UserName } from './student.interface';
// import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: 'String',
    required: true,
  },
  middleName: {
    type: 'String',
    required: true,
  },
  lastName: {
    type: 'String',
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: 'String', required: true },
  fatherOccupation: { type: 'String' },
  fatherContactNo: { type: 'String' },
  motherName: { type: 'String' },
  motherOccupation: { type: 'String' },
  motherContactNo: { type: 'String' },
});

const studentSchema = new Schema<TStudent>({
  name: {
    type: userNameSchema,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User is required'],
    unique: true,
    ref: 'User',
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: 'String',
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  contactNo: { type: 'String', required: true },
  emergencyContactNo: { type: 'String', required: true },
  email: { type: 'String', required: true, unique: true },
  dateOfBirth: { type: 'String', required: true },
  presentAddress: { type: 'String', required: true },
  permanentAddress: { type: 'String', required: false },
  guardian: guardianSchema,
  gender: {
    type: 'String',
    enum: ['male', 'female', 'other'],
  },
  localGuardian: {
    name: {
      type: 'String',
      required: true,
    },
    occupation: {
      type: 'String',
      required: true,
    },
  },
  imageURL: {
    type: 'String',
    required: false,
  },
});

export const StudentModel = model<TStudent>('Student', studentSchema);
