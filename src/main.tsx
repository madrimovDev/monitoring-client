import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from '@/app/App';

import './app/index.css';
import 'antd/dist/reset.css';
import '@fontsource/inter';

const rootContainer = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootContainer);

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(app);
