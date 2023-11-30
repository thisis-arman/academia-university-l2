// import { Schema, model, connect } from 'mongoose';

import { Types } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type LocalGuardian = {
  name: string
  occupation: string
}
export type TStudent = {
  id: number
  name: UserName
  password: string
  user: Types.ObjectId
  age: number
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  contactNo: string
  emergencyContactNo: string
  email: string
  dateOfBirth: string
  presentAddress: string
  gender: 'male' | 'female' | 'other'
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  isActive: 'Active' | 'inActive'
  imageURL: string
}
