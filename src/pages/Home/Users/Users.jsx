/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Section from '../../../components/Section/Section';
import Card from '../../../components/Card/Card';
import axios from 'axios';
import Button from '../../../components/Button/Button';
import s from './Users.module.scss';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

const Users = ({ isRefetch, setIsRefetch }) => {
  const perPage = 6;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const refetch = () => {
      setPage(1);
      setUsers([]);
      setIsRefetch(false);
    };

    const getUsers = () => {
      setIsLoading(true);
      axios
        .get(`${url}?page=${page}&count=${perPage}`)
        .then((res) => {
          setUsers((prevValue) => [...prevValue, ...res.data.users]);
          setTotalPages(res.data.total_pages);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (isRefetch) {
      refetch();
      return;
    }
    getUsers();
  }, [page, isRefetch]);

  return (
    <Section>
      <SectionHeader>Working with GET request</SectionHeader>
      <div className={s.content}>
        <div className={s.grid}>
          {users.map((user, index) => (
            <Card
              key={index}
              name={user.name}
              email={user.email}
              phone={user.phone}
              position={user.position}
              photo={user.photo}
            />
          ))}
        </div>
        {totalPages !== page && (
          <Button type="yellow" onClick={() => setPage(page + 1)}>
            Show more
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Users;
