import { Schema, model } from "mongoose";
import { Guardian, Student, UserName } from "./student.interface";
// import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: "String",
    required: true,
  },
  middleName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "String",
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: "String", required: true },
  fatherOccupation: { type: "String" },
  fatherContactNo: { type: "String" },
  motherName: { type: "String" },
  motherOccupation: { type: "String" },
  motherContactNo: { type: "String" },
});

const studentSchema = new Schema<Student>({
  id: {
    type: "Number",
    required: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: "String",
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  contactNo: { type: "String", required: true },
  emergencyContactNo: { type: "String", required: true },
  email: { type: "String", required: true, unique: true },
  dateOfBirth: { type: "String", required: true },
  presentAddress: { type: "String", required: true },
  permanentAddress: { type: "String", required: false },
  guardian: guardianSchema,
  gender: {
    type: "String",
    enum: ["male", "female", "other"],
  },
  localGuardian: {
    name: {
      type: "String",
      required: true,
    },
    occupation: {
      type: "String",
      required: true,
    },
  },
  isActive: {
    type: "String",
    enum: {
      values: ["Active", "inActive"],
      message: "{VALUE} is not valid",
    },
  },
  imageURL: {
    type: "String",
    required: false,
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
