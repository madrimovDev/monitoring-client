import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EyeFilled} from '@ant-design/icons';
import {Button, Space, Table, Tag} from 'antd';

export default function AdminsTable(): JSX.Element {
  const {loading, admins} = useAppSelector((state) => state.admins);
  return (
    <Table
      loading={loading}
      bordered
      dataSource={admins ?? []}
      pagination={false}
      columns={[
        {
          key: 'index',
          title: '№',
          render(_, _value, index) {
            return index + 1;
          },
        },
        {
          key: 'Name',
          title: 'Name',
          render(_, value) {
            return value.name;
          },
        },
        {
          key: 'Username',
          title: 'Username',
          render(_, value) {
            return value.username;
          },
        },
        {
          key: 'Permissions',
          title: 'Permissions',
          render(_, value) {
            return <Tag color='blue'>{value.permissions}</Tag>;
          },
        },
        {
          key: 'actions',
          title: '',
          render(_) {
            return (
              <Space>
                <Button size='middle' icon={<EyeFilled />} />
                <Button danger size='middle' icon={<DeleteFilled />} />
              </Space>
            );
          },
        },
      ]}
    />
  );
}
