import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table, Tag} from 'antd';

export default function DirectionsTable(): JSX.Element {
  const {directions, loading} = useAppSelector((state) => state.directions);
  return (
    <Table
      loading={loading}
      dataSource={directions ?? []}
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
          key: 'Name',
          title: 'Name',
          render(_, record) {
            return record.name;
          },
        },
        {
          key: 'Status',
          title: 'Status',
          render(_, record) {
            return (
              <Tag color={record.status === 'active' ? 'green' : 'error'}>
                {record.status}
              </Tag>
            );
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
