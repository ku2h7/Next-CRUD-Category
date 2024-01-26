export interface CategoryProps {
  id: string;
  name: string;
  is_active: boolean;
}

export interface CategoryListTableProps {
  onEdit: (category: CategoryProps) => void;
}

export interface CreateCategoryFormProps {
  onCreateSuccess: () => void;
  onCancel: () => void;
}

export interface UpdateCategoryFormProps {
  onUpdateSuccess: () => void;
  onCancel: () => void;
  category: CategoryProps
}


