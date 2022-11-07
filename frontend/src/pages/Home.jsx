import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="New Car" />
        <Tab label="Popular" />
      </Tabs>
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
