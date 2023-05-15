import {Link} from 'react-router-dom';
import {Menu, type MenuProps} from 'antd';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {type Role, getMenuItems} from './lib/getMenuItems';
import {capitalizeFirstLetter} from '@/lib';
import {usePathItem} from '@/hooks/usePathItem';
import RootSider from '../rootLayout/RootSider';

type MenuItem = Required<MenuProps>['items'][number];

export default function AdminSidebar(): JSX.Element {
  const {user} = useAppSelector((state) => state.auth);
  const path = usePathItem();
  const menuItems = user !== null ? getMenuItems(user.permissions[0] as Role) : [];

  return (
    <RootSider>
      <Menu
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
    </RootSider>
  );
}
