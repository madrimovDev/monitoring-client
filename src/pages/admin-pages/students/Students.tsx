import {StudentsDrawer, StudentsTable} from '@/components/students';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import { getAllStudents, openStudentsDrawer } from '@/store/reducers/admin/students';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';

export default function Students(): JSX.Element {
  const dispatch = useAppDispatch();
  const openDrawer = (): void => {
    dispatch(openStudentsDrawer());
  };
  useEffect(() => {
    void dispatch(getAllStudents());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={1} span={22}>
        <Space className='w-full justify-end my-10'>
          <Button onClick={openDrawer} type='primary'>
            Create Student
          </Button>
        </Space>
        <StudentsTable />
        <StudentsDrawer />
      </Col>
    </Row>
  );
}
