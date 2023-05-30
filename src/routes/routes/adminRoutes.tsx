import {lazy} from 'react';
import {Outlet, type RouteObject} from 'react-router-dom';
import Suspense from '../Suspense';
import GroupsWrapper from '@/pages/admin-pages/groups/GroupsWrapper';
import DirectionWrapper from '@/pages/admin-pages/directions/DirectionWrapper';
import Dashboard from '@/pages/Dashboard';

const Admins = lazy(async () => await import('../../pages/admin-pages/admin/Admins'));
const Directions = lazy(async () => await import('../../pages/admin-pages/directions/Directions'));
const Direction = lazy(async () => await import('../../pages/admin-pages/directions/Direction'));
const Teachers = lazy(async () => await import('../../pages/admin-pages/teachers/Teachers'));
const Teacher = lazy(async () => await import('../../pages/admin-pages/teachers/teacher'));
const Groups = lazy(async () => await import('../../pages/admin-pages/groups/Groups'));
const Group = lazy(async () => await import('../../pages/admin-pages/groups/Group'));
const Students = lazy(async () => await import('../../pages/admin-pages/students/Students'));
const Student = lazy(async () => await import('../../pages/admin-pages/students/Student'));

export const adminRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <Dashboard/>,
  },
  {
    path: 'admins',
    element: <Suspense component={<Admins />} />,
  },
  {
    path: 'directions',
    element: <DirectionWrapper />,
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
    element: <GroupsWrapper />,
    children: [
      {
        index: true,
        element: <Suspense component={<Groups />} />,
      },
      {
        path: ':groupID',
        element: <Suspense component={<Group />} />,
      },
    ],
  },
  {
    path: 'teachers',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Suspense component={<Teachers />} />,
      },
      {
        path: ':teacherID',
        element: <Suspense component={<Teacher />} />,
      },
    ],
  },
  {
    path: 'students',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Suspense component={<Students />} />,
      },
      {
        path: ':studentID',
        element: <Suspense component={<Student />} />,
      },
    ],
  },
  {
    path: '*',
    element: <>Not Found</>,
  },
];
