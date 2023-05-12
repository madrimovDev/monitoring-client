import {Button, Space, Table} from 'antd';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {usePathItem} from '@/hooks/usePathItem';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {deleteGroup, openGroupsDrawerWithData} from '@/store/reducers/groups';

export default function GroupsTable(): JSX.Element {
  const {loading, group} = useAppSelector((state) => state.groups);
  const path = usePathItem(1);
  const dispatch = useAppDispatch();

  const onDelete = (id: number): void => {
    void dispatch(deleteGroup(id));
  };

  const onEdit = (record: Groups.Group): void => {
    dispatch(openGroupsDrawerWithData(record));
  };

  return (
    <Table
      bordered
      loading={loading}
      pagination={false}
      rowKey={(item) => item.id}
      dataSource={group ?? []}
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
          key: 'direction',
          title: 'Direction',
          render(_, record) {
            return <Link to={`/${path}/directions/${record.direction.id}`}>{record.direction.name}</Link>;
          },
        },
        {
          key: 'month',
          title: 'Month',
          render(_, record) {
            return record.months;
          },
        },
        {
          key: 'Teacher',
          title: 'Teacher',
          render(_, record) {
            return (
              <Link to={`/${path}/teachers/${record.teacher?.id ?? ''}`}>
                {record.teacher?.name} {record.teacher?.surname}
              </Link>
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
                    onDelete(record.id);
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
