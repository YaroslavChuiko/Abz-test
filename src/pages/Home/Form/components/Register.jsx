import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import Input from '../../../../components/Input/Input';
import UploadFile from '../../../../components/UploadFile/UploadFile';
import Radio from '../../../../components/Radio/Radio';
import s from './Register.module.scss';
import Button from '../../../../components/Button/Button';
import Text from '../../../../components/Typography/Text';
import { useForm } from 'react-hook-form';
import api from '../../../../libs/axios';
import {
  emailValidationOptions,
  nameValidationOptions,
  phoneValidationOptions,
  photoValidationOptions,
} from '../../../../validation/register';

const Register = ({ refetchUsers, setIsSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState('');
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    const getPositions = () => {
      api
        .get('/positions')
        .then((res) => {
          setPositions(res.data.positions);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getToken = () => {
      api
        .get('/token')
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
    if (!isValid) return;

    const form = new FormData();
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('phone', data.phone);
    form.append('position_id', data.position);
    form.append('photo', data.photo[0]);

    setIsLoading(true);
    api
      .post('/users', form, {
        headers: {
          Token: token,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        refetchUsers();
        setIsSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };

  return (
    <>
      <SectionHeader>Working with POST request</SectionHeader>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} onChange={() => trigger()}>
        <Input
          label="Your name"
          isError={errors.name}
          errorMessage={errors.name?.message}
          {...register('name', nameValidationOptions)}
        />
        <Input
          label="Email"
          isError={errors.email}
          errorMessage={errors.email?.message}
          {...register('email', emailValidationOptions)}
        />
        <Input
          label="Phone"
          isError={errors.phone}
          errorMessage={errors.phone?.message}
          {...register('phone', phoneValidationOptions)}
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
          {...register('photo', photoValidationOptions)}
        />
        <div className={s.formFooter}>
          <Button type="yellow" isDisabled={!isValid || isLoading}>
            {isLoading ? 'Loading ...' : 'Sign Up'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
