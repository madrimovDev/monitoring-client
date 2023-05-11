import {usePathItem} from '@/hooks/usePathItem';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {deleteTeacher, openTeacherDrawerWithData} from '@/store/reducers/teachers';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table} from 'antd';
import {Link} from 'react-router-dom';

export default function TeachersTable(): JSX.Element {
  const {loading, teachers} = useAppSelector((state) => state.teachers);
  const path = usePathItem(1);
  const dispatch = useAppDispatch();
  const openWithData = (record: Teachers.Teacher): void => {
    dispatch(openTeacherDrawerWithData(record));
  };
  const onDelete = (record: Teachers.Teacher): void => {
    void dispatch(deleteTeacher(record.id));
  };
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
                {record.name} {record.surname}
              </Link>
            );
          },
        },
        {
          key: 'Direction',
          title: 'Direction',
          render(_, record) {
            return (
              <Space>
                {record.directions.map((dir) => {
                  return (
                    <Link key={dir.id} to={`/${path}/directions/${dir.id}`}>
                      {dir.name}
                    </Link>
                  );
                })}
              </Space>
            );
          },
        },
        {
          key: 'Groups',
          title: 'Groups',
          render(_, record) {
            if (record.groups.length === 0) return 'Has not joined groups';
            return (
              <Space >
                {record.groups.map((group) => {
                  return (
                    <Link key={group.id} to={`/${path}/groups/${group.id}`}>
                      {group.name}
                    </Link>
                  );
                })}
              </Space>
            );
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
          render(_, record) {
            return (
              <Space>
                <Button
                  onClick={() => {
                    openWithData(record);
                  }}
                  icon={<EditFilled />}
                />
                <Button
                  danger
                  onClick={() => {
                    onDelete(record);
                  }}
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
