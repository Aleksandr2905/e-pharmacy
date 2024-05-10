import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import { pharmacyReducer } from "./pharmacy/reducer";
import { authReducer } from "./auth/reducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const pharmacyPersistConfig = {
  key: "pharmacy",
  storage,
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  pharmacy: persistReducer(pharmacyPersistConfig, pharmacyReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
