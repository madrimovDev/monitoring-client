import {AdminsTable} from '@/components/admins';
import AdminsDrawer from '@/components/admins/AdminsDrawer';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllAdmins, openAdminDrawer} from '@/store/reducers/admin/admins';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';

export default function Admins(): JSX.Element {
  const dispatch = useAppDispatch();

  const openDrawer = (): void => {
    dispatch(openAdminDrawer());
  };

  useEffect(() => {
    void dispatch(getAllAdmins());
  }, []);

  return (
    <Row className='p-4'>
      <Col offset={6} span={12}>
        <Space className='justify-end w-full my-10'>
          <Button onClick={openDrawer} type='primary'>
            Create Admin
          </Button>
        </Space>
        <AdminsTable />
      </Col>
      <AdminsDrawer />
    </Row>
  );
}
