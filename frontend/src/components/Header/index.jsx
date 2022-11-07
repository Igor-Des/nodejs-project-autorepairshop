import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => { };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.buttons}>
            <ul>
              <li><Link to="/"><Button>Главная</Button></Link></li>
              <li><Link to="/"><Button>Владельцы</Button></Link></li>
              <li><Link to="/"><Button>Автомобили</Button></Link></li>
              <li><Link to="/"><Button>Механики</Button></Link></li>
              <li><Link to="/"><Button>Платежи</Button></Link></li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <ul>
              {isAuth ? (
                <>
                  <li>
                    <Link to="/getMe/info">
                      <Button>Личный кабиент</Button>
                    </Link>
                  </li>
                  <li>
                    <Button className={styles.button_import__output} onClick={onClickLogout}>
                      Выйти
                    </Button>
                  </li>
                </>
              ) : (
                <>
                <li>
                  <Link to="/login">
                    <Button className={styles.button_import__enter}>Войти</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button>Создать аккаунт</Button>
                  </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
