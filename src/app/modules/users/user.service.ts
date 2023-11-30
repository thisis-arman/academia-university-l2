import config from '../../config'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, student: TUser) => {
  const passwordU = password || (config.default_password as string)
  const result = await User.create(password, student)
  return result
}

export const UserServices = {
  createStudentIntoDB,
}
