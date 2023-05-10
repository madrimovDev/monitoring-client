import {Button, Space, Table} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import {getPathItem} from '@/layouts/lib/getPathItem';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';

export default function StudentsTable(): JSX.Element {
  const {loading, students} = useAppSelector((state) => state.students);
  const {pathname} = useLocation();
  const path = getPathItem(pathname, 1);
  return (
    <Table
      loading={loading}
      bordered
      pagination={false}
      dataSource={students ?? []}
      columns={[
        {
          key: 'index',
          title: '№',
          render(_, _record, index) {
            return index + 1;
          },
        },
        {
          key: 'name',
          title: 'Name',
          render(_, record) {
            return `${record.name} ${record.surname}`;
          },
        },
        {
          key: 'username',
          title: 'Username',
          render(_, record) {
            return record.username;
          },
        },
        {
          key: 'birthday',
          title: 'Birthday',
          render(_, record) {
            return record.birthday;
          },
        },
        {
          key: 'groups',
          title: 'Groups',
          render(_, record) {
            return record.groups.map((group) => {
              return (
                <Link key={group.id} to={`/${path}/groups/${group.id}`}>
                  {group.name}
                </Link>
              );
            });
          },
        },
        {
          key: 'actions',
          title: '',
          render() {
            return (
              <Space>
                <Button icon={<EditFilled />} />
                <Button danger icon={<DeleteFilled />} />
              </Space>
            );
          },
        },
      ]}
    />
  );
}
