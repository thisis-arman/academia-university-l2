import config from '../../config';
import { TStudent } from '../students/student.interface';
import { StudentModel } from '../students/student.model';

import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';
  const newUser = await User.create(userData);
  userData.id = '2023100001';
  if (Object.keys(newUser)) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
