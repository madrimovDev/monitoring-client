import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {Col, List, Row, Spin, Tag, Typography} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';

export default function Group(): JSX.Element | null {
  const {groupID} = useParams();
  const path = usePathItem(1);
  const {data, isFetching} = useQuery({
    queryKey: 'group',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const response = await api.get<Groups.GroupResponse>(`organizations/${orgId}/groups/${groupID ?? ''}`);
      return response.data;
    },
  });

  if (isFetching)
    return (
      <div className='w-full h-full grid place-items-center'>
        <Spin size='large' spinning />
      </div>
    );

  if (data === undefined) {
    return null;
  }

  return (
    <Row className='px-4 pt-10'>
      <Col offset={1} span={22}>
        <Typography.Title className='flex items-center gap-2'>
          {data?.group.name} Guruhi <Tag color='blue'>{data.group.status}</Tag>
        </Typography.Title>
        <List className='w-1/6'>
          <List.Item actions={[data.group.name]}>
            <List.Item.Meta title={'Name'} />
          </List.Item>
          <List.Item
            actions={[
              <Link to={`/${path}/directions/${data.group.id}`} key='dir'>
                {data?.group.direction.name}
              </Link>,
            ]}
          >
            <List.Item.Meta title={'Direction'} />
          </List.Item>
          <List.Item actions={[data?.group.months]}>
            <List.Item.Meta title={'Months'} />
          </List.Item>
          <List.Item
            actions={[
              <>
                {data.group.teacher !== null ? (
                  <Link to={`/${path}/teachers/${data.group.teacher?.id ?? ''}`} key='teacher'>
                    {data.group.teacher?.name}
                    {data.group.teacher?.surname}
                  </Link>
                ) : (
                  'No Teacher'
                )}
              </>,
            ]}
          >
            <List.Item.Meta title={'Teacher'} />
          </List.Item>
        </List>
      </Col>
    </Row>
  );
}
