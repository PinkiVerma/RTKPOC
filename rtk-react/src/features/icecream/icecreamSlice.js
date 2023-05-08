import { createSlice } from "@reduxjs/toolkit"
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState ={
    numberOfIcecream : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecream--
        },
        restocked: (state, action)=>{
            state.numberOfIcecream += action.payload
        }
    }, 
    // extraReducers: { //extraReducers allows createSlice to respond to other action types besides the types it has generated
    //     ['cake/ordered']: (state) =>{
    //         state.numberOfIcecream--
    //     }
    // }
    //alternate way
    // extraReducers: (builder)=>{
    //     builder.addCase(cakeOrdered, (state) =>{
    //         state.numberOfIcecream--
    //     })
    // }
})

export default icecreamSlice.reducer //default export
export const {ordered, restocked} = icecreamSlice.actions //named export
