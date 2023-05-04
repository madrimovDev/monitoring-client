import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './reducers/auth/authReducer';
import {adminsReducers} from './reducers/admins/adminsReducer';
import { adminsDrawerReducer } from './reducers/admins/adminsDrawerReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  admins: adminsReducers,
  adminsDrawer: adminsDrawerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
