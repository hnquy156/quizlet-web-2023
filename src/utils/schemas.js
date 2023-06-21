import z from 'zod';

const nameSchema = z
  .string()
  .trim()
  .min(1, 'Required')
  .regex(/^[\w\u00c0-\u017e]+( [\w\u00c0-\u017e]+)*$/, 'Name is invalid');

const usernameSchema = z
  .string()
  .trim()
  .min(1, 'Required')
  .regex(/^[0-9A-z_]+$/, 'Username is invalid');

const passwordSchema = z
  .string()
  .min(3, 'Password must be at least 3 characters long');

const phoneSchema = z
  .string()
  .trim()
  .min(1, 'Required')
  .regex(/^[0-9]*$/, 'Phone is invalid');

const emailSchema = z.string().trim().toLowerCase().email('Email is invalid');

export const loginSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export const SignupSchema = z
  .object({
    name: nameSchema,
    phone: phoneSchema,
    email: emailSchema,
    username: usernameSchema,
    password: passwordSchema,
    repeat_password: passwordSchema,
  })
  .refine(({ password, repeat_password }) => password === repeat_password, {
    message: `Password and Confirm Password don't match`,
    path: ['repeat_password'],
  });
