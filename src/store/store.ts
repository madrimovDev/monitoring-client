import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './reducers/auth/authReducer';
import {adminsReducers} from './reducers/admin/admins/adminsReducer';
import {adminsDrawerReducer} from './reducers/admin/admins/adminsDrawerReducer';
import {directionsReducer} from './reducers/admin/directions/directionsReducer';
import {directionsModalReducer} from './reducers/admin/directions/directionsModalReducer';
import {groupsReducer} from './reducers/admin/groups/groupsReducer';
import {groupsDrawerReducer} from './reducers/admin/groups/groupsDrawerReducer';
import {teachersReducer} from './reducers/admin/teachers/teachersReducer';
import {teacherDrawerReducer} from './reducers/admin/teachers/teacherDrawerReducer';
import {studentsReducer} from './reducers/admin/students/studentsReducer';
import {studentsDrawerReducer} from './reducers/admin/students/studentsDrawerReducer';

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
  teacherDrawer: teacherDrawerReducer,
  students: studentsReducer,
  studentsDrawer: studentsDrawerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
