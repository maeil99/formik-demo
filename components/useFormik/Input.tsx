import { ChangeEventHandler, FocusEventHandler } from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  className?: string;
}

const Input = ({
  name,
  label,
  onBlur,
  onChange,
  type,
  value,
  className,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${className} registerField border border-white`}
      />
    </>
  );
};

export default Input;
