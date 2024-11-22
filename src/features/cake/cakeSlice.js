import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            if(state.numberOfCakes > 0){
            state.numberOfCakes-- //redux toolkit handle the state transition internally               
            }       
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        },
    },
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions