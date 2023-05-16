import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Suspense from './Suspense';
import {adminRoutes} from './routes/adminRoutes';

// global
const Login = lazy(async () => await import('../pages/admin-pages/login/Login'));
const RedirectPermissions = lazy(async () => await import('../layouts/redirect/RedirectPermissions'));

// layouts
const RootLayout = lazy(async () => await import('../layouts/rootLayout/RootLayout'));
const AdminLayout = lazy(async () => await import('../layouts/admin/AdminLayout'));
const TeacherLayout = lazy(async () => await import('../layouts/teacher/TeacherLayout'));

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
        children: adminRoutes,
      },
      {
        path: 'teacher',
        element: <Suspense component={<TeacherLayout />} />,
        children: [
          {
            path: 'dashboard',
            element: <>Element</>,
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
