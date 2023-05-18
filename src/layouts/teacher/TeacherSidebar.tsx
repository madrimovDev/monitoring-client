import {Menu, type MenuProps} from 'antd';
import RootSider from '../rootLayout/RootSider';
import {useGetGroups} from './lib/useGetGroups';
import {DashboardOutlined, FlagOutlined, GroupOutlined} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const defaultLinks: MenuItem[] = [
  {
    key: 'dashboard',
    label: <Link to='dashboard'>Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: 'criteria',
    label: <Link to='criteria'>Criteria</Link>,
    icon: <FlagOutlined />,
  },
];

const getMenuItems = (data: Group.Group[]): MenuItem[] => {
  const item: MenuItem = {
    key: 'group-key',
    label: 'Groups',
    type: 'group',
    children: data.map((d) => {
      return {
        key: d.id,
        label: <Link to={`group/${d.id.toString()}`}>{d.name}</Link>,
        icon: <GroupOutlined />,
      };
    }),
  };
  return [...defaultLinks, item];
};

export default function TeacherSidebar(): JSX.Element {
  const {data} = useGetGroups();
  const {pathname} = useLocation();
  const menuItems = getMenuItems(data?.groups ?? []);
  return (
    <RootSider>
      <Menu
        theme='dark'
        defaultSelectedKeys={['dashboard']}
        selectedKeys={[...pathname.split('/')]}
        items={menuItems}
      />
    </RootSider>
  );
}
