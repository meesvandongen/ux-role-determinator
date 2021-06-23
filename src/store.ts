import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { persistedStateReducer } from "./state";

export const store = configureStore({
  reducer: persistedStateReducer,
});

export const persistor = persistStore(store);