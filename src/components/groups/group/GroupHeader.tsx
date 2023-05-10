import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {Card, List} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';

export default function GroupHeader(): JSX.Element | null {
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

  if (data === undefined) {
    return null;
  }

  const {group} = data;
  return (
    <Card bordered loading={isFetching} title='Group Info'>
      <List>
        <List.Item actions={[group.name]}>
          <List.Item.Meta title={'Name'} />
        </List.Item>
        <List.Item
          actions={[
            <Link to={`/${path}/directions/${group.id}`} key='dir'>
              {group.direction.name}
            </Link>,
          ]}
        >
          <List.Item.Meta title={'Direction'} />
        </List.Item>
        <List.Item actions={[group.months]}>
          <List.Item.Meta title={'Months'} />
        </List.Item>
        <List.Item
          actions={[
            <>
              {group.teacher !== null ? (
                <Link to={`/${path}/teachers/${group.teacher?.id ?? ''}`} key='teacher'>
                  {group.teacher?.name}
                  {group.teacher?.surname}
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
    </Card>
  );
}
