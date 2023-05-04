import {RouterProvider} from 'react-router-dom';
import {routes} from '@/routes';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleProvider} from '@ant-design/cssinjs';

export default function RootProvider(): JSX.Element {
  return (
    <StyleProvider hashPriority='high'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={routes} />
        </PersistGate>
      </Provider>
    </StyleProvider>
  );
}
