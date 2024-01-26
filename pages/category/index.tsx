// Category.tsx
import React, { useState } from 'react';
import { useAuth } from '@context/AuthContext';
import { CategoryList, CreateCategoryForm, UpdateCategoryForm } from '@/components';
import Link from 'next/link';

const Category: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
    is_active: boolean;
  } | null>(null);

  const handleCreateSuccess = () => {
    setShowCreateForm(false);
  };

  const handleEditCategory = (category: {
    id: string;
    name: string;
    is_active: boolean;
  }) => {
    setSelectedCategory(category);
    setShowUpdateForm(true);
  };

  const handleUpdateSuccess = () => {
    setShowUpdateForm(false);
    setSelectedCategory(null);
  };

  const handleCancel = () => {
    setShowCreateForm(false);
    setShowUpdateForm(false);
    setSelectedCategory(null);
  };

  return (
    <div>
      <h2>Category</h2>
      {isAuthenticated && (
        <>
          {showCreateForm ? (
            <CreateCategoryForm onCreateSuccess={handleCreateSuccess} onCancel={handleCancel} />
          ) : showUpdateForm ? (
            <UpdateCategoryForm
              onUpdateSuccess={handleUpdateSuccess}
              onCancel={handleCancel}
              category={selectedCategory!}
            />
          ) : (
            <>
              <CategoryList onEdit={handleEditCategory} />
              <button onClick={() => setShowCreateForm(true)}>Create Category</button>
            </>
          )}
        </>
      )}
      {!isAuthenticated && (
        <p>
          You need to <Link href="/">login</Link> to view categories.
        </p>
      )}
    </div>
  );
};

export default Category;