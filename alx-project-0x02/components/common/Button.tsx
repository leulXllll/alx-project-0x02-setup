import React from 'react';
import { type ButtonProps } from '@/interfaces/index';

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({size = 'medium', shape = 'rounded-md', onClick }) => {
  const sizeClass = sizeClasses[size];

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shape} hover:bg-blue-700 transition`}
    >
      
    </button>
  );
};

export default Button;