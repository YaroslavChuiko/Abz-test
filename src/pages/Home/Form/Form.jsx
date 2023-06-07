import React, { useState } from 'react';
import Section from '../../../components/Section/Section';
import Register from './components/Register';
import SentSuccessfully from './components/SentSuccessfully';

const Form = ({ refetchUsers }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Section>
      {isSuccess ? <SentSuccessfully /> : <Register refetchUsers={refetchUsers} setIsSuccess={setIsSuccess} />}
    </Section>
  );
};

export default Form;
