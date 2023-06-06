import React, { forwardRef } from 'react';
import s from './Radio.module.scss';
const Radio = forwardRef(({ label, value, onChange, onBlur, name }, ref) => {
  return (
    <label className={s.radio}>
      <input ref={ref} className={s.input} type="radio" value={value} name={name} onChange={onChange} onBlur={onBlur} />
      {label}
    </label>
  );
});

export default Radio;
