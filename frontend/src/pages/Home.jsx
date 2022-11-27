import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import axios from '../axios';

import { Car } from '../components/Car';
import { fetchCars } from '../redux/slices/cars';

export const Home = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector(state => state.cars);

    const isCarsLoading = cars.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchCars());
    }, []);


    return (
    <>
      <Grid container spacing={4}>
        <Grid xs={12} item>
          {(isCarsLoading ? [...Array(5)] : cars.items).map((obj, index) =>
          isCarsLoading ? (
          <Car key={index} isLoading={true} />
          ) : (
            <Car
            id={obj._id}
            brand={obj.brand}
            color={obj.color}
            year={obj.year}
            VIN={obj.VIN}
            engineNumber={obj.engineNumber}
            user={obj.user} />
            
          )
          )}
        </Grid>

      </Grid>
    </>
  );
};
