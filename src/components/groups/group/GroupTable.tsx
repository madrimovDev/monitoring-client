import {useDisclosure} from '@/hooks/useDisclosure';
import {usePathItem} from '@/hooks/usePathItem';
import {DeleteFilled, EditFilled, UsergroupAddOutlined} from '@ant-design/icons';
import {Button, Card, Space, Table, Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import GroupAddStudents from './GroupAddStudents';
import {useGroupStudents} from './lib/useGroupStudents';

export default function GroupTable(): JSX.Element {
  const path = usePathItem(1);
  const [open, onOpen, onClose] = useDisclosure();

  const {loading, students, addStudent, removeStudent} = useGroupStudents();

  return (
    <>
      <Card
        title='Students'
        bodyStyle={{
          padding: 0,
        }}
        extra={[
          <Tooltip title='Add Student' key='add-student'>
            <Button
              onClick={onOpen}
              size='small'
              className='!inline-flex items-center justify-center !text-sky-500 !border-sky-500 !bg-sky-500/5'
              type='default'
              icon={<UsergroupAddOutlined />}
            />
          </Tooltip>,
        ]}
      >
        <Table
          loading={loading}
          pagination={false}
          dataSource={students}
          columns={[
            {
              key: '№',
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
                  <Link to={`/${path}/students/${record.id}`}>
                    {record.name} {record.surname}
                  </Link>
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
              render(_, record) {
                return (
                  <Space>
                    <Button size='small' icon={<EditFilled />} />
                    <Button
                      onClick={() => {
                        removeStudent(record.id);
                      }}
                      size='small'
                      danger
                      icon={<DeleteFilled />}
                    />
                  </Space>
                );
              },
            },
          ]}
        />
      </Card>
      <GroupAddStudents open={open} onClose={onClose} addStudent={addStudent} />
    </>
  );
}
