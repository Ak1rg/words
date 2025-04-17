import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
    theme:string
}

const initialState:IAppState = {
    theme:'light'
}

export const appSlice = createSlice({
    name:'appSlice',
    initialState:initialState,
    reducers:{
        setTheme(state,action:PayloadAction<string>){
            state.theme = action.payload
        }
    }
})


export const {
    setTheme,
} = appSlice.actions

export default appSlice.reducer