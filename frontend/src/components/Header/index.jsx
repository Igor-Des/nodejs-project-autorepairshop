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
              {/* <li><Link to="/"><Button>Автомобили</Button></Link></li> */}
              <li><Link to="/add-car"><Button>Добавить автомобиль</Button></Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
