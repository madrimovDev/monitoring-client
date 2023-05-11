import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {Table} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';

export default function GroupTable(): JSX.Element {
  const {groupID} = useParams();
  const path = usePathItem(1);
  const {data, isFetching} = useQuery({
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
    <Table
      loading={isFetching}
      pagination={false}
      dataSource={data?.students}
      bordered
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
  );
}
