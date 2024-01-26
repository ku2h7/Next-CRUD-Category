import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const createValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
});

export const updateValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  is_active: Yup.boolean().required('Required'),
});