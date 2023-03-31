import { configureStore } from '@reduxjs/toolkit';
import count from './redux/count'
export default configureStore({
    reducer:{
        countReducer: count,
        
    },
})