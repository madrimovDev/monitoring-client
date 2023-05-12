import {Link} from 'react-router-dom';
import {Layout, Menu, Typography, type MenuProps} from 'antd';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {type Role, getMenuItems} from './lib/getMenuItems';
import {capitalizeFirstLetter} from '@/lib';
import {usePathItem} from '@/hooks/usePathItem';

type MenuItem = Required<MenuProps>['items'][number];

export default function AdminSidebar(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  const path = usePathItem();
  const menuItems = user !== null ? getMenuItems(user.permissions[0] as Role) : [];

  return (
    <Layout.Sider className='!fixed !overflow-auto !left-0 !top-0 !bottom-0'>
      <div className='px-4 py-3'>
        <Typography.Title
          className='flex justify-center active:bg-blue-500 active:scale-75 transition-all bg-gray-500/30 py-2 rounded-md !mb-0 !text-2xl !text-white'
          level={5}
        >
          <span className='text-blue-300'>L</span>
          <span className='text-blue-400'>M</span>
          <span className='text-blue-500'>S</span>
        </Typography.Title>
      </div>
      <Menu
        className=''
        theme='dark'
        mode='vertical'
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
        items={menuItems.map((item) => {
          const mItem: MenuItem = {
            key: item.value,
            label: <Link to={item.value}>{capitalizeFirstLetter(item.value)}</Link>,
            icon: item.icon,
          };
          return mItem;
        })}
      />
    </Layout.Sider>
  );
}
