import {GroupsDrawer} from '@/components/groups';
import {Outlet} from 'react-router-dom';

export default function GroupsWrapper(): JSX.Element {
  return (
    <>
      <Outlet />
      <GroupsDrawer />
    </>
  );
}
