import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../helper/Error';
import useForm from '../../../hooks/useForm';

import { UserContext } from '../../../contexts/UserContext';
import styles from './styles.module.css';
import stylesBtn from '../../../components/Button/styles.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/perdeu-senha">
        Esqueci minha senha
      </Link>
      <div className={styles.create}>
        <h2 className={styles.subTitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
