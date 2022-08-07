import React, { useRef } from 'react';

interface IProps {
  label: string;
  checked?: boolean;
  onChange?: (e: HTMLInputElement | null) => void;
}

const CheckBox: React.FC<IProps> = ({ label, checked, onChange }) => {
  const inputRef = useRef(null);

  const handleOnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" ref={inputRef} onChange={handleOnChange} checked={checked} />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
