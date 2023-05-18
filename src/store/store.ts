import {configureStore, combineReducers, createAction, type AnyAction, type CombinedState} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './reducers/auth/auth.reducer';
import {adminReducers} from './reducers/admin';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['auth'],
};

const resetAction = createAction('RESET');
const rootReducer = combineReducers({
  auth: authReducer,
  adminStore: adminReducers,
});

type ResettableRootState = CombinedState<{
  auth: ReturnType<typeof authReducer>;
  adminStore: ReturnType<typeof adminReducers>;
}>;

const resettableRootReducer = (state: ResettableRootState | undefined, action: AnyAction): ResettableRootState => {
  if (action.type === resetAction.type) {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableRootReducer);

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

export const cleanStore = (): void => {
  void persistor.purge();
  store.dispatch(resetAction());
  window.localStorage.clear();
};
