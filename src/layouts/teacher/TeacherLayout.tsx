import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';

export default function TeacherLayout(): JSX.Element {
  return (
    <Layout className='h-full'>
      <Layout.Sider collapsible />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
