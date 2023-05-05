import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {
  deleteDirection,
  openDirectionModalWithData,
} from '@/store/reducers/directions';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table, Tag} from 'antd';

export default function DirectionsTable(): JSX.Element {
  const {directions, loading} = useAppSelector((state) => state.directions);
  const dispatch = useAppDispatch();

  const onEdit = (record: Directions.Direction): void => {
    void dispatch(openDirectionModalWithData({data: record}));
  };

  const onDelete = (record: Directions.Direction): void => {
    void dispatch(deleteDirection(record.id));
  };

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
          render(_, record) {
            return (
              <Space>
                <Button
                  onClick={() => {
                    onEdit(record);
                  }}
                  icon={<EditFilled />}
                />
                <Button
                  onClick={() => {
                    onDelete(record);
                  }}
                  danger
                  icon={<DeleteFilled />}
                />
              </Space>
            );
          },
        },
      ]}
    />
  );
}
