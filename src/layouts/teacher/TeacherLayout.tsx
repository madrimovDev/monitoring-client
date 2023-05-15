import {Layout} from 'antd';
import {Outlet} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

export default function TeacherLayout(): JSX.Element {
  return (
    <Layout className='h-full overflow-auto'>
      <TeacherSidebar />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
