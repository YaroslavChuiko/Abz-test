import React, { forwardRef, useState } from 'react';
import s from './Input.module.scss';
import classNames from 'classnames';

const Input = forwardRef(({ type = 'text', label, isError = false, errorMessage, onChange, onBlur, name }, ref) => {
  const [isFilled, setIsFilled] = useState('');

  const handleInput = (e) => {
    setIsFilled(e.target.value);
  };

  return (
    <div>
      <div className={classNames(s.container, { [s.error]: isError })}>
        <input
          ref={ref}
          className={s.input}
          name={name}
          type={type}
          onInput={handleInput}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label className={classNames(s.label, { [s.filled]: isFilled })}>{label}</label>
      </div>
      {isError && <div className={s.errorMessage}>{errorMessage}</div>}
    </div>
  );
});

export default Input;
