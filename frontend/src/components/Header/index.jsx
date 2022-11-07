import React from 'react';
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
              <li><a href="/"><Button>Главная</Button></a></li>
              <li><a href="/"><Button>Владельцы</Button></a></li>
              <li><a href="/"><Button>Автомобили</Button></a></li>
              <li><a href="/"><Button>Механики</Button></a></li>
              <li><a href="/"><Button>Платежи</Button></a></li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <ul>
              {isAuth ? (
                <>
                  <li>
                    <a href="/getMe/info">
                      <Button>Личный кабиент</Button>
                    </a>
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
                  <a href="/login">
                    <Button className={styles.button_import__enter}>Войти</Button>
                  </a>
                </li>
                <li>
                  <a href="/register">
                    <Button>Создать аккаунт</Button>
                  </a>
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
