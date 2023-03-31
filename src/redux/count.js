import { createSlice } from '@reduxjs/toolkit';

export const count = createSlice({
    name:'count',
    initialState:{
        num:0,
    },
    reducers: {
        increment: (state) => {
            state.num +=1 ;
        },
        decrement: (state) => {
            state.num -=1
        }
    },
})

export const { increment , decrement} = count.actions

export default count.reducer