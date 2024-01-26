import React from 'react';
import { InputProps } from '@/interfaces';

const Input: React.FC<InputProps> = ({
  label,
  id, 
  name,
  type,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error && <div>{error}</div>}
    </div>
  )
}

export default Input;