import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';

import styles from './styles.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu-senha" element={<LoginPasswordLost />} />
          <Route path="resetar-senha" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
