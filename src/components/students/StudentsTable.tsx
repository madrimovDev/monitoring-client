import {Button, Space, Table} from 'antd';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {usePathItem} from '@/hooks/usePathItem';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {openStudentsDrawerWithData, selectStudents} from '@/store/reducers/admin/students';

export default function StudentsTable(): JSX.Element {
  const {loading, students} = useAppSelector(selectStudents);
  const path = usePathItem(1);
  const dispatch = useAppDispatch();
  const onEdit = (data: Students.Student): void => {
    dispatch(openStudentsDrawerWithData(data));
  };
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
          key: 'groups',
          title: 'Groups',
          render(_, record) {
            if (record.groups.length === 0) return 'Has not joined groups';
            return (
              <Space>
                {record.groups.map((group, index) => {
                  return (
                    <div className='flex gap-2 items-center' key={group.id}>
                      <Link to={`/${path}/groups/${group.id}`}>{group.name}</Link>
                      {record.groups.length - 1 !== index ? <div className='w-1 h-1 bg-black/80 rounded-full' /> : ''}
                    </div>
                  );
                })}
              </Space>
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
                <Button danger icon={<DeleteFilled />} />
              </Space>
            );
          },
        },
      ]}
    />
  );
}
