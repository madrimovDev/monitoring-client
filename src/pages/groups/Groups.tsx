import {GroupsTable} from '@/components/groups';
import {Button, Col, Row, Space} from 'antd';

export default function Groups(): JSX.Element {
  return (
    <Row className='p-4'>
      <Col offset={4} span={16}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary'>
            Create Group
          </Button>
        </Space>
        <GroupsTable />
      </Col>
    </Row>
  );
}
