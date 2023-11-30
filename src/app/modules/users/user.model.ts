import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  needsPasswordChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'faculty'],
  },
  status: {
    type: String,
    enum: ['in-progress', 'blocked'],
    default: 'in-progress',
  },
  isDeleted: { type: Boolean, default: false },
});

export type NewUser = {
  id: string;
  password: string;
  role: string;
};

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('user', userSchema);
