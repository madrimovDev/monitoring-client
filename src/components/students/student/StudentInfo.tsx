import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {LinkOutlined} from '@ant-design/icons';
import {Descriptions, List} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';

export default function StudentInfo(): JSX.Element {
  const {studentID} = useParams();
  const path = usePathItem(1);
  const {data} = useQuery({
    queryKey: 'get-student',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId == null || studentID === undefined) {
        throw new Error('Organization id not found');
      }
      const response = await api.get<Student.StudentResponse>(`organizations/${orgId}/students/${studentID}`);
      return response.data;
    },
  });
  return (
    <Descriptions title='Student Info' layout='vertical' bordered column={4}>
      <Descriptions.Item label='Name'>{data?.student.name}</Descriptions.Item>
      <Descriptions.Item label='Surname'>{data?.student.surname}</Descriptions.Item>
      <Descriptions.Item label='Username'>{data?.student.username}</Descriptions.Item>
      <Descriptions.Item label='Phone'>{data?.student.phone}</Descriptions.Item>
      <Descriptions.Item label='Groups' span={1}>
        <List>
          {data?.student.groups.map((group) => {
            return (
              <List.Item
                key={group.id}
                actions={[
                  <Link to={`/${path}/groups/${group.id.toString()}`} key='link'>
                    <LinkOutlined />
                  </Link>,
                ]}
              >
                <List.Item.Meta title={group.name} description={group.direction.name} />
              </List.Item>
            );
          })}
        </List>
      </Descriptions.Item>
    </Descriptions>
  );
}
