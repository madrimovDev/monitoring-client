import {useEffect} from 'react';
import {TeachersDrawer, TeachersTable} from '@/components/teachers';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {Button, Col, Row, Space} from 'antd';
import { getAllTeachers, openTeacherDrawer } from '@/store/reducers/admin/teachers';

export default function Teachers(): JSX.Element {
  const dispatch = useAppDispatch();

  const openDrawer = (): void => {
    dispatch(openTeacherDrawer());
  };

  useEffect(() => {
    void dispatch(getAllTeachers());
  }, []);

  return (
    <Row className='p-4'>
      <Col span={22} offset={1}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary' onClick={openDrawer}>
            Create Teacher
          </Button>
        </Space>
        <TeachersTable />
        <TeachersDrawer />
      </Col>
    </Row>
  );
}
