import { configureStore } from "@reduxjs/toolkit";
import cvReducer from './cvSlice';

export const cvStore = configureStore({
    reducer: {
        cv: cvReducer
    }
});

export type RootState = ReturnType<typeof cvStore.getState>
export type AppDispatch = typeof cvStore.dispatch;