import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISideBarState {
    open:boolean
}

const initialState:ISideBarState = {
    open:false
}

export const sideBarSlice = createSlice({
    name:'sideBarSlice',
    initialState:initialState,
    reducers:{
        setOpen(state,action:PayloadAction<boolean>){
            state.open = action.payload
        }
    }
})


export const {
    setOpen
} = sideBarSlice.actions
