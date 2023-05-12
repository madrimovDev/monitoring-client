import {Layout} from 'antd';
import AdminSidebar from './AdminSidebar';
import {Outlet} from 'react-router-dom';

const {Content} = Layout;

export default function AdminLayout(): JSX.Element {
  return (
    <>
      <Layout className='h-full pb-10'>
        <AdminSidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}
