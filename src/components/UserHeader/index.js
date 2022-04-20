import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from '../UserHeaderNav';

import styles from './styles.module.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/conta') {
      setTitle('Minha Conta');
    } else if (pathname === '/conta/estatisticas') {
      setTitle('Estatísticas');
    } else if (pathname === '/conta/postar') {
      setTitle('Poste Sua Foto');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
