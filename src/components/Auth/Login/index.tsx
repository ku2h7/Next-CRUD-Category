import React from 'react';
import { useFormik } from 'formik';
import { loginUser } from '@api/authApi';
import { loginValidationSchema } from '@validations/validationSchema';
import { LoginFormProps, LoginProps } from '@/interfaces';
import { Input, Button } from '@/components';

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values: LoginProps) => {
      try {
        const response = await loginUser(values);
        const token = response.data.token;
        if (token !== undefined) {
          localStorage.setItem('token', token);
        };
        onLoginSuccess(token);
      } catch (error) {
        console.error('Login failed', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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

    <Button type={'submit'} label={'Login'} />
    </form>
  );
};

export default LoginForm;
