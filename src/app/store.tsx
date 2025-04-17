import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { sideBarSlice } from "@/widgets/SideBar";

export const store = configureStore({
    reducer: {
        app: appSlice,
        sideBarSlice:sideBarSlice.reducer,
    },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;