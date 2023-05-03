import {Divider, Layout, Menu, type MenuProps} from 'antd';
import styles from './admin.module.css';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {useLayoutEffect, useState} from 'react';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {type Role, getMenuItems} from '../lib/getMenuItems';

const Logo = ({collapsed}: {collapsed: boolean}): JSX.Element => {
  return (
    <Link to='/' className={styles.logo}>
      {!collapsed ? 'Lesson Monitoring' : 'LMS'}
    </Link>
  );
};
type MenuItem = Required<MenuProps>['items'][number];

export default function AdminSidebar(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const {user} = useAppSelector((state) => state.auth);
  const menuItems =
    user !== null ? getMenuItems(user.permissions[0] as Role) : [];

  return (
    <Layout.Sider
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      className={styles.sidebar}
      collapsible
    >
      <Logo collapsed={collapsed} />
      <Divider style={{background: 'rgba(255,255,255,0.2)'}} />
      <Menu
        className={styles.menu}
        theme='dark'
        mode='vertical'
        defaultSelectedKeys={[menuItems[0].value]}
        items={menuItems.map((item) => {
          const mItem: MenuItem = {
            key: item.value,
            label: <Link to={item.value}>{item.value}</Link>,
            icon: item.icon,
          };
          return mItem;
        })}
      />
    </Layout.Sider>
  );
}
