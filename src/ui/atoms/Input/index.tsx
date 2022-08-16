import React from 'react';
import './index.scss';

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  name?: string;
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  errorMessage,
  name,
}): React.ReactElement => {
  return (
    <>
      <input
        type={type ? type : 'text'}
        className={`input ${className ? className : ''} ${
          errorMessage ? 'input-invalid' : ''
        }`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(event) => onChange(event?.target.value)}
      />

      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};