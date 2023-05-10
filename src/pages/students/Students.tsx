import {StudentsTable} from '@/components/students';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllStudents} from '@/store/reducers/students';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';

export default function Students(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllStudents());
  }, []);
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
