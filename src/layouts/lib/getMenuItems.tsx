import {
  ApartmentOutlined,
  DashboardOutlined,
  FileZipOutlined,
  FlagOutlined,
  GroupOutlined,
  SafetyOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type {ReactNode} from 'react';
export type Role = 'admin' | 'teacher' | 'students' | 'supervisor';

interface MenuItem {
  role: Role[];
  value: string;
  icon: ReactNode;
}

const menuItems: MenuItem[] = [
  {
    role: ['admin', 'supervisor', 'teacher'],
    value: 'dashboard',
    icon: <DashboardOutlined />,
  },
  {
    role: ['admin', 'supervisor'],
    value: 'admins',
    icon: <SafetyOutlined />,
  },
  {
    role: ['admin', 'supervisor'],
    value: 'directions',
    icon: <FlagOutlined />,
  },
  {
    role: ['admin', 'supervisor', 'teacher'],
    value: 'groups',
    icon: <GroupOutlined />,
  },
  {
    role: ['admin', 'supervisor'],
    value: 'teachers',
    icon: <TeamOutlined />,
  },
  {
    role: ['admin', 'supervisor'],
    value: 'students',
    icon: <TeamOutlined />,
  },
  {
    role: ['admin', 'supervisor'],
    value: 'archive',
    icon: <FileZipOutlined />,
  },
  {
    role: ['supervisor'],
    value: 'organizations',
    icon: <ApartmentOutlined />,
  },
];

export const getMenuItems = (role: Role): typeof menuItems => {
  return menuItems.filter((item) => item.role.includes(role));
};
