import {type AxiosError} from 'axios';
import {type store} from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AxiosErrorWithMessage = AxiosError<{message: string}>;

export type RemoveKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
