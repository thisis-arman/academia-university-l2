import config from '../../config'

import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TUser) => {
  const user: Partial<TUser> = {}
  user.password || (config.default_password as string)
  user.role = 'student'
  const result = await User.create(user)
  user.id = '2023100001'
  if (Object.keys(result)) {
    studentData.id = result.id
    studentData.user = result._id
  }
  return result
}

export const UserServices = {
  createStudentIntoDB,
}
