import {Layout} from 'antd';
import styles from './admin.module.css';
import AdminSidebar from './AdminSidebar';
import {Outlet} from 'react-router-dom';

const {Header, Content} = Layout;

export default function AdminLayout(): JSX.Element {
  return (
    <Layout className={styles.layout}>
      <AdminSidebar />
      <Layout>
        <Header className={styles.header} />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
