import {Menu} from 'antd';
import RootSider from '../rootLayout/RootSider';
import {useGetGroups} from './lib/useGetGroups';
import {DashboardOutlined, GroupOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {usePathItem} from '@/hooks/usePathItem';

export default function TeacherSidebar(): JSX.Element {
  const {data} = useGetGroups();
  const path = usePathItem();
  return (
    <RootSider>
      <Menu
        theme='dark'
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        items={[
          {
            key: 'dashboard',
            label: <Link to='dashboard'>Dashboard</Link>,
            icon: <DashboardOutlined />,
          },
        ].concat(
          data?.groups.map((group) => {
            return {
              key: group.id.toString(),
              label: <Link to={`group/${group.id}`}>{group.name}</Link>,
              icon: <GroupOutlined />,
            };
          }) ?? [],
        )}
      />
    </RootSider>
  );
}
