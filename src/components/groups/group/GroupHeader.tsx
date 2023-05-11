import {Button, Card, List, Tooltip} from 'antd';
import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {UserAddOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';
import {useState} from 'react';
import GroupAddTeacher from './GroupAddTeacher';

export default function GroupHeader(): JSX.Element | null {
  const [open, setOpen] = useState<boolean>(false);
  const {groupID} = useParams();
  const path = usePathItem(1);
  const {data, isFetching, refetch} = useQuery({
    queryKey: 'group',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const response = await api.get<Groups.GroupResponse>(`organizations/${orgId}/groups/${groupID ?? ''}`);
      return response.data;
    },
  });

  const onClose = (): void => {
    setOpen(false);
  };

  const onOpen = (): void => {
    setOpen(true);
  };

  if (data === undefined) {
    return null;
  }
  const {group} = data;
  return (
    <>
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
                    {group.teacher?.name}{' '}
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
          <List.Item
            actions={[
              <Tooltip key='add-student' title='Add Student'>
                <Button
                  size='small'
                  className='!inline-flex items-center justify-center !text-teal-500 !border-teal-500 !bg-teal-500/5'
                  type='default'
                  icon={<UsergroupAddOutlined />}
                />
              </Tooltip>,
              <Tooltip key='add-teacher' title='Change Teacher'>
                <Button
                  onClick={onOpen}
                  size='small'
                  className='!inline-flex items-center justify-center !text-sky-500 !border-sky-500 !bg-sky-500/5'
                  type='default'
                  icon={<UserAddOutlined />}
                />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta title={'Settings'} />
          </List.Item>
        </List>
      </Card>
      <GroupAddTeacher open={open} refetch={refetch} onClose={onClose} teacher={data.group.teacher} />
    </>
  );
}
