import {useEffect} from 'react';
import {Button, Col, Row, Space} from 'antd';
import {GroupsDrawer, GroupsTable} from '@/components/groups';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import { getAllGroups, openGroupsDrawer } from '@/store/reducers/admin/groups';

export default function Groups(): JSX.Element {
  const dispatch = useAppDispatch();

  const openDrawer = (): void => {
    void dispatch(openGroupsDrawer());
  };

  useEffect(() => {
    void dispatch(getAllGroups());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={4} span={16}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary' onClick={openDrawer}>
            Create Group
          </Button>
        </Space>
        <GroupsTable />
      </Col>
      <GroupsDrawer />
    </Row>
  );
}
