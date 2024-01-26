// CreateCategoryForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import { useAuth } from '@context/AuthContext';
import { createCategory } from '@api/categoryApi';
import { createValidationSchema } from '@/validations/validationSchema';
import { CreateCategoryFormProps } from '@/interfaces';
import { Button, Input } from '@/components';

const CreateCategoryForm: React.FC<CreateCategoryFormProps> = ({ onCreateSuccess, onCancel }) => {
  const { isAuthenticated } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createValidationSchema,
    onSubmit: async (values) => {
      try {
        if (isAuthenticated) {
          const token = localStorage.getItem('token');
          if (token) {
            await createCategory(values.name, token);
            onCreateSuccess();
          }
        }
      } catch (error) {
        console.error('Create category failed', error);
      }
    },
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

      <Button type={'button'} label={'Cancel'} onClick={onCancel} />
      <Button type={'submit'} label={'Create'} />
    </form>
  );
};

export default CreateCategoryForm;