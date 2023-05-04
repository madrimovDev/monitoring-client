import {Layout} from 'antd';
import AdminSidebar from './AdminSidebar';
import {Outlet} from 'react-router-dom';
import AdminHeader from './AdminHeader';

const {Content} = Layout;

export default function AdminLayout(): JSX.Element {
  return (
    <Layout className="h-screen">
      <AdminSidebar />
      <Layout>
        <AdminHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
