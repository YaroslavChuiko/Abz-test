/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import React, { useEffect, useState } from 'react';
import Section from '../../../components/Section/Section';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import Input from '../../../components/Input/Input';
import UploadFile from '../../../components/UploadFile/UploadFile';
import Radio from '../../../components/Radio/Radio';
import s from './Form.module.scss';
import axios from 'axios';
import Button from '../../../components/Button/Button';
import Text from '../../../components/Typography/Text';
import { useForm } from 'react-hook-form';

const positionsUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

const emailPattern =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const phonePattern = /^[\+]{0,1}380([0-9]{9})$/;

const Form = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getPositions = () => {
      axios
        .get(positionsUrl)
        .then((res) => {
          setPositions(res.data.positions);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getToken = () => {
      axios
        .get(tokenUrl)
        .then((res) => {
          setToken(res.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    setIsLoading(true);
    getToken();
    getPositions();
    setIsLoading(false);
  }, []);

  const onSubmit = (data) => {
    trigger();
    console.log(isValid);
    if (!isValid) return;
  };
  console.log(token);
  return (
    <Section>
      <SectionHeader>Working with POST request</SectionHeader>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
        headers={{
          // accessToken: 'xxx',
          Token: token,
          'Content-Type': 'multipart/form-data',
        }}
      >
        <Input
          label="Your name"
          isError={errors.name}
          errorMessage={errors.name?.type}
          {...register('name', { required: true, minLength: 2, maxLength: 60 })}
        />
        <Input
          label="Email"
          isError={errors.email}
          errorMessage={errors.email?.type}
          {...register('email', { required: true, minLength: 2, maxLength: 60, pattern: emailPattern })}
        />
        <Input
          label="Phone"
          isError={errors.phone}
          errorMessage={errors.phone?.type}
          {...register('phone', { required: true, pattern: phonePattern })}
        />

        <div className={s.position}>
          <div className={s.positionHeader}>
            <Text>Select your position</Text>
          </div>
          {positions.length &&
            positions.map((p, index) => <Radio key={index} value={p.id} label={p.name} {...register('position')} />)}
        </div>

        <UploadFile
          isError={errors.photo}
          errorMessage={errors.photo?.type}
          {...register('photo', {
            validate: {
              lessThan5MB: (files) => files[0]?.size < 5000000 || 'Max 5Mb',
              acceptedFormats: (files) => ['image/jpeg'].includes(files[0]?.type) || 'Only JPEG/JPG ',
            },
          })}
        />
        <div className={s.formFooter}>
          <Button type="yellow" isDisabled={!isValid}>
            Sign Up
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default Form;
