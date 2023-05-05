import {GroupsTable} from '@/components/groups';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllGroups} from '@/store/reducers/groups';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';

export default function Groups(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllGroups());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={4} span={16}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary'>Create Group</Button>
        </Space>
        <GroupsTable />
      </Col>
    </Row>
  );
}
