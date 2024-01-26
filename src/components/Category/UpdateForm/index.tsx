// UpdateCategoryForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import { useAuth } from '@context/AuthContext';
import { updateCategory } from '@api/categoryApi';
import { updateValidationSchema } from '@/validations/validationSchema';
import { UpdateCategoryFormProps } from '@/interfaces';
import { Button, Input } from '@/components';

const UpdateCategoryForm: React.FC<UpdateCategoryFormProps> = ({ onUpdateSuccess, onCancel, category }) => {
  const { isAuthenticated } = useAuth();

  const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      is_active: category.is_active,
    },
    validationSchema: updateValidationSchema,
    onSubmit: async (values) => {
      try {
        if (isAuthenticated) {
          const token = localStorage.getItem('token');
          if (token) {
            await updateCategory(values.id, values.name, values.is_active, token);
            onUpdateSuccess();
          }
        }
      } catch (error) {
        console.error('Update category failed', error);
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

      <Input 
        label="Status"
        id="is_active"
        name="is_active"
        type="checkbox"
        checked={formik.values.is_active || false}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.is_active || false}
        error={formik.errors.is_active}
      />

      <Button type={'button'} label={'Cancel'} onClick={onCancel} />
      <Button type={'submit'} label={'Update'} />
    </form>
  );
};

export default UpdateCategoryForm;