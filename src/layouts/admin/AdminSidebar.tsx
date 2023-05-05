import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Divider, Layout, Menu, type MenuProps} from 'antd';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {type Role, getMenuItems} from '../lib/getMenuItems';
import {getPathItem} from '../lib/getPathItem';
import {capitalizeFirstLetter} from '@/lib';

const Logo = ({collapsed}: {collapsed: boolean}): JSX.Element => {
  return (
    <Link
      to='/'
      className='h-[64px] grid place-items-center !text-white text-lg overflow-hidden min-w-max'
    >
      {!collapsed ? 'Lesson Monitoring' : 'LMS'}
    </Link>
  );
};
type MenuItem = Required<MenuProps>['items'][number];

export default function AdminSidebar(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const {user} = useAppSelector((state) => state.auth);
  const {pathname} = useLocation();
  const path = getPathItem(pathname);
  const menuItems =
    user !== null ? getMenuItems(user.permissions[0] as Role) : [];

  return (
    <Layout.Sider
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      className=''
      collapsible
    >
      <Logo collapsed={collapsed} />
      <Divider style={{background: 'rgba(255,255,255,0.2)', marginTop: 0}} />
      <Menu
        className=''
        theme='dark'
        mode='vertical'
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        items={menuItems.map((item) => {
          const mItem: MenuItem = {
            key: item.value,
            label: (
              <Link to={item.value}>{capitalizeFirstLetter(item.value)}</Link>
            ),
            icon: item.icon,
          };
          return mItem;
        })}
      />
    </Layout.Sider>
  );
}
