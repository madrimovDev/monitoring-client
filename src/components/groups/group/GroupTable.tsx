import {api} from '@/api';
import {useDisclosure} from '@/hooks/useDisclosure';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {UsergroupAddOutlined} from '@ant-design/icons';
import {Button, Card, Table, Tooltip} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';
import GroupAddStudents from './GroupAddStudents';

export default function GroupTable(): JSX.Element {
  const {groupID} = useParams();
  const path = usePathItem(1);
  const [open, onOpen, onClose] = useDisclosure();

  const {data, isFetching, refetch} = useQuery({
    queryKey: 'group/students',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('OrganizationID not found');
      const response = await api.get<Students.StudentsResponse>(
        `organizations/${orgId}/groups/${groupID ?? ''}/students`,
      );
      return response.data;
    },
  });

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
          loading={isFetching}
          pagination={false}
          dataSource={data?.students}
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
              key: 'name',
              title: 'Name',
              render(_, record) {
                return record.phone;
              },
            },
          ]}
        />
      </Card>
      <GroupAddStudents open={open} onClose={onClose} refetch={refetch} />
    </>
  );
}
