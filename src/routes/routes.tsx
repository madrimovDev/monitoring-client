import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Suspense from './Suspense';

const RootLayout = lazy(
  async () => await import('../layouts/rootLayout/RootLayout'),
);
const Login = lazy(async () => await import('../pages/login/Login'));
const AdminLayout = lazy(
  async () => await import('../layouts/admin/AdminLayout'),
);
const RedirectPermissions = lazy(
  async () => await import('../layouts/redirect/RedirectPermissions'),
);

export const routes = createBrowserRouter([
  {
    path: '',
    element: <Suspense component={<RootLayout />} />,
    children: [
      {
        index: true,
        element: <Suspense component={<RedirectPermissions />} />,
      },
      {
        path: 'admin',
        element: <Suspense component={<AdminLayout />} />,
        children: [
          {
            path: 'dashboard',
            element: <>Element</>,
          },
          {
            path: '*',
            element: <>Not Found</>,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Suspense component={<Login />} />,
  },
]);
