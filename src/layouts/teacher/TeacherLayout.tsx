import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

export default function TeacherLayout(): JSX.Element {
  return (
    <Layout className='h-full overflow-auto'>
      <TeacherSidebar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
