import {useAppSelector} from '@/store/hooks/useAppSelector';
import {Layout} from 'antd';
import {Navigate, Outlet} from 'react-router-dom';
import AdminHeader from './RootHeader';

export default function RootLayout(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  if (user === null) return <Navigate to='/login' replace />;
  return (
    <Layout className='h-screen'>
      <AdminHeader />
      <Outlet />
    </Layout>
  );
}
