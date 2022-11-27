import React from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
// import { userSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import 'easymde/dist/easymde.min.css';
import styles from './AddCar.module.scss';
import axios from '../../axios'

export const AddCar = () => {
    const {id} = useParams();
    const navigate = useNavigate();    
    const [isLoading, setLoading] = React.useState(false);
    const [brand, setBrand] = React.useState('');
    const [color, setColor] = React.useState('');
    const [year, setYear] = React.useState('');
    const [VIN, setVIN] = React.useState('');
    const [engineNumber, setEngineNumber] = React.useState('');
    const [userId, setUserId] = React.useState('');

    const isEditing = Boolean(id);

    const onSubmit = async () => {
        try {
            setLoading(true);

            const fields = {
                brand,
                color,
                year,
                VIN,
                engineNumber,
                userId
            }

            const {data} = isEditing 
            ? await axios.patch(`/cars/${id}`, fields) // edit
            : await axios.post('/cars', fields) // create new

            const _id = isEditing ? id : data._id;

            navigate(`/cars/${_id}`);
        }
        catch(err) {
            console.warn(err);
            alert("Ошибка при создании машины!");
        }
    };

    React.useEffect(() => {
        if (id) {
            axios.get(`/cars/${id}`).then( ({data}) => {
                setBrand(data.brand);
                setColor(data.color);
                setYear(data.year);
                setVIN(data.VIN);
                setEngineNumber(data.engineNumber);
                setUserId(data.user._id);
            }).catch(err => {
                console.warn(err);
                alert("Ошибка при редактировании машины!")
            });
        }
    }, []);

    return (
        <Paper style={{ padding: 30 }}>
            <img className={styles.image} src={'https://img.freepik.com/premium-vector/suv-car-design-template_183875-930.jpg?w=740'} alt="Uploaded" />

            <h2>Добавление нового автомобиля</h2>
            {/* <hr /> */}
            <div>
                <label className={styles.labelTitle}>Бренд:</label>
                <TextField
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите бренд"
                    fullWidth
                />

                <label className={styles.labelTitle}>Цвет:</label>
                <TextField
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите цвет"
                    fullWidth
                />

                <label className={styles.labelTitle}>Год:</label>
                <TextField
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите год"
                    fullWidth
                />


                <label className={styles.labelTitle}>VIN номер:</label>
                <TextField
                    value={VIN}
                    onChange={e => setVIN(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите VIN"
                    fullWidth
                />

                <label className={styles.labelTitle}>Номер двигателя:</label>
                <TextField
                    value={engineNumber}
                    onChange={e => setEngineNumber(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите номер двигателя"
                    fullWidth
                />

                <label className={styles.labelTitle}>UserId:</label>
                <TextField
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    classes={{ root: styles.brand }}
                    variant="standard"
                    placeholder="Введите userId"
                    fullWidth
                />
            </div>



            <div className={styles.buttons}>
                <Button onClick={onSubmit} size="large" variant="contained">
                    {isEditing ? 'Сохранить' : 'Добавить'}
                </Button>
                <a href="/">
                    <Button size="large">Отмена</Button>
                </a>
            </div>
        </Paper>
    );
};