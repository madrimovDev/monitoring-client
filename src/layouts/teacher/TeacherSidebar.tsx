import RootSider from '../rootLayout/RootSider';
import { useGetGroups } from './lib/useGetGroups';

export default function TeacherSidebar(): JSX.Element {
  const { data } = useGetGroups()
  
  return <RootSider >
    Teacher
  </RootSider>;
}
