import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { style } from '@mui/system';

import styles from './Car.module.scss';
import { UserInfo } from '../UserInfo';
import { fetchRemoveCar } from '../../redux/slices/cars';

export const Car = ({
    id,
    brand,
    color,
    year,
    VIN,
    engineNumber,
    user,
    isFullCar,
    isLoading
}) => {
    const dispatch = useDispatch();

    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить машину?')) {
            dispatch(fetchRemoveCar(id));
        }
    };

    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullCar })}>
            <img
                className={styles.car_img}
                src={"https://www.motors-forless.co.uk/assets/400467/large/b27ef165c7b17debb29072f20aa8858c_400467.jpg"}
                alt={brand}
            />
            <h3 className={styles.car_model}>
                <span className={styles.brand}>{brand} • </span>
                <span className={styles.year}> {year} • </span>
                <span className={styles.color}> {color} </span>
            </h3>
            <h3 className={styles.car_model_info}>
                <p>VIN: <span className={VIN}>{VIN} • </span></p>
                <p>Engine Number: <span className={engineNumber}>{engineNumber} • </span></p>
            </h3>
            <div className={styles.userInfo}>
                <UserInfo {...user} />
            </div>
            <div className={styles.moreInfo}>
                <Link to={`/cars/${id}`} className={styles.moreInfo_link}>
                    <span className={styles.textMoreInfo_icon}>Узнать подробнее</span>
                </Link>
                <br />
                <Link to={`/cars/${id}/edit`} className={styles.moreInfo_link}>
                    <IconButton className={styles.moreInfo__icon}>
                        <EditIcon />
                    </IconButton>
                </Link>
                <IconButton onClick={onClickRemove} className={styles.moreInfo__icon}>
                    <ClearIcon />
                </IconButton>
            </div>
            <div className={styles.comeToHome}>
            <Link to={`/cars/${id}/edit`} className={styles.moreInfo_link}>
                    <IconButton className={styles.moreInfo__icon}>
                        Редактировать автомобиль <EditIcon />
                    </IconButton>
                </Link>                
                |                
                <IconButton onClick={onClickRemove} className={styles.moreInfo__icon}>
                Удалить автомобиль <ClearIcon />
                </IconButton>
                <hr />
                <Link to="/">
                    <Button size="large" className={styles.buttonToHome}>
                        Вернуться на главную
                    </Button>
                </Link>
            </div>
        </div>
    );
}