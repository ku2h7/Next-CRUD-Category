import React from 'react';
import { useFormik } from 'formik';
import { registerUser } from '@api/authApi';
import { registerValidationSchema } from '@validations/validationSchema';
import { RegisterFormProps, RegisterProps } from '@/interfaces';
import { Button, Input } from '@/components';

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values: RegisterProps) => {
      try {
        await registerUser(values);
        onRegisterSuccess();
      } catch (error) {
        console.error('Registration failed', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input 
        label="Name"
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.name || false}
        error={formik.errors.name}
      />

      <Input 
        label="Email"
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email || false}
        error={formik.errors.email}
      />

      <Input 
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.password || false}
        error={formik.errors.password}
      />

      <Button type={'submit'} label={'Register'} />
    </form>
  );
};

export default RegisterForm;
