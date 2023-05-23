import {lazy} from 'react';
import {Outlet, type RouteObject} from 'react-router-dom';
import Suspense from '../Suspense';

const Group = lazy(async () => await import('../../pages/teacher-pages/group/Group'));
const Criteria = lazy(async () => await import('../../pages/teacher-pages/criteria/Criteria'));
const Lesson = lazy(async () => await import('../../pages/teacher-pages/lesson/Lesson'));
export const teacherRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <>Element</>,
  },
  {
    path: 'criteria',
    element: <Suspense component={<Criteria />} />,
  },
  {
    path: 'group/:groupID',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Suspense component={<Group />} />,
      },
      {
        path: 'lesson/:lessonID',
        element: <Suspense component={<Lesson />} />,
      },
    ],
  },
];
