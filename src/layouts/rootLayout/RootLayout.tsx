import {useAppSelector} from '@/store/hooks/useAppSelector';
import {Navigate, Outlet} from 'react-router-dom';

export default function RootLayout(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  
  if (user === null) return <Navigate to='/login' replace />;

  return <Outlet />;
}
