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
    var arrayImageCar = [
        "https://avcdn.av.by/advertbig/0001/3811/9363.jpg",
        // "https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg",
        // "https://www.ixbt.com/img/n1/news/2022/9/3/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-10-12%20104914_large.jpg",
        // "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/09/28/02/5602932/18f509e7c1a7511c978e090d30974f1825123bd1.jpg",
        // "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Highlights/bmw-m-series-m2-coupe-gallery-image-impressions-01_890.jpg",
        // "https://avatars.mds.yandex.net/get-verba/787013/2a0000017c373735fe07cbba9aadd3f022fc/cattouchret",
        // "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/crwpmnjnikml27qgn8ke",
        // "https://s3-prod.autonews.com/s3fs-public/styles/1200x630/public/3ACLASS-02_i.jpg",
        // "https://www.ixbt.com/img/n1/news/2022/2/2/34610-semejnyj_avtomobil-moshhnye_mashiny-mersedes_amg-mercedes_benz_cls_class-mersedes_benc_e_klass-1920x1080_large.jpg"
    ];
    var rand = Math.floor(Math.random() * arrayImageCar.length);

    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullCar })}>
            <img
                className={styles.car_img}
                src={arrayImageCar[rand]}
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
                <Link to={`/users/${id}`}>
                <UserInfo {...user} />
                </Link>
            </div>
            <div className={styles.moreInfo}>
                <Link to={`/cars/${id}`} className={styles.moreInfo_link}>
                    <span className={styles.textMoreInfo_icon}>Узнать подробнее</span>
                    <IconButton onClick={onClickMoreInfo} className={styles.moreInfo__icon}>
                        <InfoIcon />
                    </IconButton>
                </Link>
            </div>
            <div className={styles.comeToHome}>
                <Link to="/">
                    <Button size="large" className={styles.buttonToHome}>
                        Вернуться на главную
                    </Button>
                </Link>
            </div>
        </div>
    );
}