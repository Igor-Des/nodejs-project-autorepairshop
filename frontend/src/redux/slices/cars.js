import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    const { data } = await axios.get('/cars');
    return data;
});

export const fetchRemoveCar = createAsyncThunk('cars/fetchRemoveCar', async (id) => 
    axios.delete(`/cars/${id}`),
);


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
        // Добавление машины
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
        },
        // Удаление машины
        [fetchRemoveCar.pending]: (state, action) => {
            state.cars.items = state.cars.items.filter(obj => obj._id !== action.meta.arg);
        },
    },
})

export const carsReducer = carsSlice.reducer;