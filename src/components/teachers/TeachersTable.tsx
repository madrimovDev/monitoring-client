import {usePathItem} from '@/hooks/usePathItem';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {deleteTeacher, openTeacherDrawerWithData, selectTeachers} from '@/store/reducers/admin/teachers';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Space, Table} from 'antd';
import {Link} from 'react-router-dom';

export default function TeachersTable(): JSX.Element {
  const {loading, teachers} = useAppSelector(selectTeachers);
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
          key: 'username',
          title: 'Username',
          render(_, record) {
            return record.username;
          },
        },
        {
          key: 'Direction',
          title: 'Direction',
          render(_, record) {
            return (
              <Space>
                {record.directions.map((dir, index) => {
                  return (
                    <div key={dir.id} className='flex items-center gap-2'>
                      <Link to={`/${path}/directions/${dir.id}`}>{dir.name}</Link>
                      {index !== record.directions.length - 1 ? (
                        <div className='w-1 h-1 bg-black/80 rounded-full' />
                      ) : (
                        ''
                      )}
                    </div>
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
              <Space>
                {record.groups.map((group, index) => {
                  return (
                    <div key={group.id} className='flex items-center gap-2'>
                      <Link to={`/${path}/groups/${group.id}`}>{group.name}</Link>
                      {index !== record.groups.length - 1 ? <div className='w-1 h-1 bg-black/80 rounded-full' /> : ''}
                    </div>
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
