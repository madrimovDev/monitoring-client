import {type AxiosError} from 'axios';
import {type store} from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AxiosErrorWithMessage = AxiosError<{message: string}>;
