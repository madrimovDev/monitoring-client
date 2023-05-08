import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './reducers/auth/authReducer';
import {adminsReducers} from './reducers/admins/adminsReducer';
import {adminsDrawerReducer} from './reducers/admins/adminsDrawerReducer';
import {directionsReducer} from './reducers/directions/directionsReducer';
import {directionsModalReducer} from './reducers/directions/directionsModalRedicer';
import {groupsReducer} from './reducers/groups/groupsReducer';
import {teachersReducer} from './reducers/teachers/teachersReducer';
import {groupsDrawerReducer} from './reducers/groups/groupsDrawerReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  admins: adminsReducers,
  adminsDrawer: adminsDrawerReducer,
  directions: directionsReducer,
  directionsModal: directionsModalReducer,
  groups: groupsReducer,
  groupsDrawer: groupsDrawerReducer,
  teachers: teachersReducer,
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
