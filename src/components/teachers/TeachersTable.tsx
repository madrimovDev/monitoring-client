import {usePathItem} from '@/hooks/usePathItem';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table} from 'antd';
import {Link} from 'react-router-dom';

export default function TeachersTable(): JSX.Element {
  const {loading, teachers} = useAppSelector((state) => state.teachers);
  const path = usePathItem(1);
  return (
    <Table
      loading={loading && teachers === null}
      dataSource={teachers ?? []}
      rowKey={(item) => item.id}
      pagination={false}
      bordered
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
            return (
              <Link to={record.id.toString()}>
                {record.name}
                {record.surname}
              </Link>
            );
          },
        },
        {
          key: 'Direction',
          title: 'Direction',
          render(_, record) {
            return record.directions.map((dir) => {
              return (
                <Link key={dir.id} to={`/${path}/directions/${dir.id}`}>
                  {dir.name}
                </Link>
              );
            });
          },
        },
        {
          key: 'Groups',
          title: 'Groups',
          render(_, record) {
            if (record.groups.length === 0) return 'Has not joined groups';
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
          key: 'phone',
          title: 'Phone',
          render(_, record) {
            return record.phone;
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
