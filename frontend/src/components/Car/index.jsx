import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import Button from "@mui/material/Button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import styles from './Car.module.scss';
import { UserInfo } from '../UserInfo';
import { style } from '@mui/system';

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
    const onClickMoreInfo = () => { };

    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullCar })}>          
            <img
                className={styles.car_img}
                src="https://avcdn.av.by/advertbig/0001/3811/9363.jpg"
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
                <UserInfo {...user}/>
            </div>
            <div className={styles.moreInfo}>
                <Link to={`/cars/${id}`} className = {styles.moreInfo_link}>
                <span className={styles.textMoreInfo_icon}>Узнать подробнее</span>
                    <IconButton onClick={onClickMoreInfo} className={styles.moreInfo__icon}>
                        <InfoIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}