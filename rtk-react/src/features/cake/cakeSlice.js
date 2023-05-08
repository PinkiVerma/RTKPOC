import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    numberOfCakes : 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state,action) => {
            state.numberOfCakes--
        },
        restocked: (state, action)=>{
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer //default export
export const {ordered, restocked} = cakeSlice.actions //named export
