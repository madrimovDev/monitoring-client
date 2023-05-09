import {lazy} from 'react';
import {Outlet, createBrowserRouter} from 'react-router-dom';
import Suspense from './Suspense';

const RootLayout = lazy(async () => await import('../layouts/rootLayout/RootLayout'));
const Login = lazy(async () => await import('../pages/login/Login'));
const AdminLayout = lazy(async () => await import('../layouts/admin/AdminLayout'));
const RedirectPermissions = lazy(async () => await import('../layouts/redirect/RedirectPermissions'));
const Admins = lazy(async () => await import('../pages/admin/Admins'));
const Directions = lazy(async () => await import('../pages/directions/Directions'));
const Direction = lazy(async () => await import('../pages/directions/Direction'));
const Teachers = lazy(async () => await import('../pages/teachers/Teachers'));

const Groups = lazy(async () => await import('../pages/groups/Groups'));

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
            path: 'admins',
            element: <Suspense component={<Admins />} />,
          },
          {
            path: 'directions',
            element: <Suspense component={<Outlet />} />,
            children: [
              {
                path: '',
                element: <Suspense component={<Directions />} />,
              },
              {
                path: ':directionID',
                element: <Suspense component={<Direction />} />,
              },
            ],
          },
          {
            path: 'groups',
            element: <Suspense component={<Groups />} />,
          },
          {
            path: 'teachers',
            element: <Suspense component={<Teachers />} />,
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
