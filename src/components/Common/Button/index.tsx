import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  label,
  type,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button;