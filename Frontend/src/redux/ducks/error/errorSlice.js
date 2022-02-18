import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    error: null,
    status: 'IDLE',
    isVisible: false,
};

const errorSlice = createSlice({
    name: 'error',

    initialState,

    reducers: {
        setError: (state, {payload: error}) => {
            state.error = error;
            state.isVisible = true;
        },
        hideError: state => {
            state.error = null;
            state.isVisible = false;
        },
        setStatus: (state, {payload: status}) => {
            state.status = status;
        },
        resetStatus: state => {
            state.status = initialState.status;
        },
    },
});

export const {setError, hideError, setStatus, resetStatus} = errorSlice.actions;

export const namespace = errorSlice.name;

export const errorReducer = errorSlice.reducer;
