import {StudentsTable} from '@/components/students';
import {Button, Col, Row, Space} from 'antd';

export default function Students(): JSX.Element {
  return (
    <Row className='p-4'>
      <Col offset={4} span={16}>
        <Space className='w-full justify-end my-10'>
          <Button type='primary'>Create Student</Button>
        </Space>
          <StudentsTable />
      </Col>
    </Row>
  );
}
