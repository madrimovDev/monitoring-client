import {RouterProvider} from 'react-router-dom';
import {routes} from '@/routes';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleProvider} from '@ant-design/cssinjs';
import {QueryClient, QueryClientProvider} from 'react-query';
import {verify} from '@/store/reducers/auth';
import {FloatButton} from 'antd';
import {QuestionOutlined} from '@ant-design/icons';

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

void store.dispatch(verify());

export default function RootProvider(): JSX.Element {
  return (
    <StyleProvider hashPriority='high'>
      <QueryClientProvider client={query}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={routes} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
      <FloatButton icon={<QuestionOutlined />} tooltip={'FAQ'} />
    </StyleProvider>
  );
}
