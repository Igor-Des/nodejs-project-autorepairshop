import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const { data } = await axios.get('/cars');
    return data;
});


const initialState = {
    cars: {
        items: [],
        status: 'loading',
    },
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCars.pending]: (state) => {
            state.cars.items = [];
            state.cars.status = 'loading';
        },
        [fetchCars.fulfilled]: (state, action) => {
            state.cars.items = action.payload;
            state.cars.status = 'loaded';
        },
        [fetchCars.rejected]: (state) => {
            state.cars.items = [];
            state.cars.status = 'error';
        }
    }
})

export const carsReducer = carsSlice.reducer;