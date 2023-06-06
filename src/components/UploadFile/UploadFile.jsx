import React, { forwardRef, useState } from 'react';
import s from './UploadFile.module.scss';
import classNames from 'classnames';

const UploadFile = forwardRef(({ isError = false, errorMessage, onChange, onBlur, name }, ref) => {
  const [fileName, setFileName] = useState('');

  const handleInput = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  const handleClick = (e) => {
    e.currentTarget.querySelector(`input[name="${name}"]`).click();
  };

  return (
    <div>
      <div className={classNames(s.container, { [s.error]: isError })} onClick={handleClick}>
        <input
          ref={ref}
          className={s.input}
          type="file"
          name={name}
          accept=".jpeg,.jpg"
          onInput={handleInput}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={s.btn}>Upload</div>
        <div className={classNames(s.field, { [s.filled]: fileName })}>{fileName ? fileName : 'Upload your photo'}</div>
      </div>
      {isError && <div className={s.errorMessage}>{errorMessage}</div>}
    </div>
  );
});

export default UploadFile;
