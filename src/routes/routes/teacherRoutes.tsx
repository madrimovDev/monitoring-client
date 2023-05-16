// import type { RouteObject } from "react-router-dom";

import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';
import Suspense from '../Suspense';

const Group = lazy(async () => await import('../../pages/teacher-pages/group/Group'));

export const teacherRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <>Element</>,
  },
  {
    path: 'group/:groupID',
    element: <Suspense component={<Group />} />,
  },
];
