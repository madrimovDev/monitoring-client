import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {deleteDirection, openDirectionModalWithData, selectDirections} from '@/store/reducers/admin/directions';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table, Tag} from 'antd';
import {Link} from 'react-router-dom';

export default function DirectionsTable(): JSX.Element {
  const {directions, loading} = useAppSelector(selectDirections);
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
      rowKey={(item) => item.id}
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
            return <Link to={record.id.toString()}>{record.name}</Link>;
          },
        },
        {
          key: 'Status',
          title: 'Status',
          render(_, record) {
            return <Tag color={record.status === 'active' ? 'green' : 'error'}>{record.status}</Tag>;
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
