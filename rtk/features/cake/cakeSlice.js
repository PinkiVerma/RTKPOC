const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = cakeSlice.reducer //default export
module.exports.cakeActions = cakeSlice.actions //named export
