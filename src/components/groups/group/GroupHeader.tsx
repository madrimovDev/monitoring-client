import {Button, Card, List, Space, Tooltip} from 'antd';
import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {getUserDataFromLocalStorage} from '@/lib';
import {EditFilled} from '@ant-design/icons';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';
import GroupAddTeacher from './GroupAddTeacher';
import {useDisclosure} from '@/hooks/useDisclosure';
import {useState} from 'react';

export default function GroupHeader(): JSX.Element | null {
  const [isOpenAddTeacher, openAddTeacher, closeAddTeacher] = useDisclosure();
  const {groupID} = useParams();
  const path = usePathItem(1);
  const [data, setData] = useState<Groups.GroupResponse | undefined>();
  const {isFetching} = useQuery({
    queryKey: 'group',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const response = await api.get<Groups.GroupResponse>(`organizations/${orgId}/groups/${groupID ?? ''}`);
      return response.data;
    },
    onSuccess(data) {
      setData(data);
    },
  });

  const changeData = (data: Groups.GroupResponse): void => {
    setData(data);
  };

  if (data === undefined) {
    return null;
  }
  const {group} = data;
  console.warn(data, 'header');

  return (
    <>
      <Card
        bordered
        loading={isFetching}
        title='Group Info'
        extra={[
          <Tooltip key='add-teacher' title='Edit Group'>
            <Button
              onClick={openAddTeacher}
              size='small'
              className='!inline-flex items-center justify-center !text-sky-500 !border-sky-500 !bg-sky-500/5'
              type='default'
              icon={<EditFilled />}
            />
          </Tooltip>,
        ]}
      >
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
              <Space key='teacher'>
                {group.teacher !== null ? (
                  <Link to={`/${path}/teachers/${group.teacher?.id ?? ''}`}>
                    {group.teacher?.name} {group.teacher?.surname}
                  </Link>
                ) : (
                  'No Teacher'
                )}
              </Space>,
            ]}
          >
            <List.Item.Meta title={'Teacher'} />
          </List.Item>
        </List>
      </Card>
      <GroupAddTeacher open={isOpenAddTeacher} changeData={changeData} onClose={closeAddTeacher} group={data.group} />
    </>
  );
}
