export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  type: 'submit' | 'button';
}

export interface InputProps {
  label: string;
  id: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'password' | 'checkbox';
  value?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean;
  error: string | undefined;
}