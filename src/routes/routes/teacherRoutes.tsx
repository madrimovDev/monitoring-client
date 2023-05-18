import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';
import Suspense from '../Suspense';

const Group = lazy(async () => await import('../../pages/teacher-pages/group/Group'));
const Criteria = lazy(async () => await import('../../pages/teacher-pages/criteria/Criteria'));

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
    element: <Suspense component={<Group />} />,
  },
];
