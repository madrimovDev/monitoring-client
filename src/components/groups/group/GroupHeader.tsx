import {Button, Card, List, Space, Tooltip} from 'antd';
import {EditFilled} from '@ant-design/icons';
import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {openGroupsDrawerWithData, selectGroupById} from '@/store/reducers/admin/groups';
import {usePathItem} from '@/hooks/usePathItem';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';

export default function GroupHeader(): JSX.Element | null {
  const {groupID} = useParams();
  const group = useAppSelector((state) => selectGroupById(state, groupID));
  const path = usePathItem(1);
  const dispatch = useAppDispatch();
  
  const openAddTeacher = (): void => {
    if (group !== undefined) {
      dispatch(openGroupsDrawerWithData(group));
    }
  };

  return (
    <>
      <Card
        bordered
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
          <List.Item actions={[group?.name]}>
            <List.Item.Meta title={'Name'} />
          </List.Item>
          <List.Item
            actions={[
              <Link to={`/${path}/directions/${group?.id ?? ''}`} key='dir'>
                {group?.direction.name}
              </Link>,
            ]}
          >
            <List.Item.Meta title={'Direction'} />
          </List.Item>
          <List.Item actions={[group?.months]}>
            <List.Item.Meta title={'Months'} />
          </List.Item>
          <List.Item
            actions={[
              <Space key='teacher'>
                {group?.teacher !== null ? (
                  <Link to={`/${path}/teachers/${group?.teacher?.id ?? ''}`}>
                    {group?.teacher?.name} {group?.teacher?.surname}
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
    </>
  );
}