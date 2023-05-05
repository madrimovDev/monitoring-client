import {Button, Space, Table} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import {getPathItem} from '@/layouts/lib/getPathItem';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';

export default function GroupsTable(): JSX.Element {
  const {loading, group} = useAppSelector((state) => state.groups);
  const {pathname} = useLocation();
  const path = getPathItem(pathname, 1);
  return (
    <Table
      bordered
      loading={loading}
      pagination={false}
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
            return (
              <Link to={`/${path}/directions/${record.direction.id}`}>
                {record.direction.name}
              </Link>
            );
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
