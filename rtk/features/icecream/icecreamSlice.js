const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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
    extraReducers: (builder)=>{
        builder.addCase(cakeActions.ordered, (state) =>{
            state.numberOfIcecream--
        })
    }
})

module.exports = icecreamSlice.reducer //default export
module.exports.icecreamActions = icecreamSlice.actions //named export
