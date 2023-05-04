import {AdminsTable} from '@/components/admins';
import AdminsDrawer from '@/components/admins/AdminsDrawer';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllAdmins} from '@/store/reducers/admins';
import {Col, Row} from 'antd';
import {useEffect} from 'react';

export default function Admins(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllAdmins());
  }, []);

  return (
    <Row className='p-4'>
      <Col offset={6} span={12}>
        <AdminsTable />
      </Col>
      <AdminsDrawer />
    </Row>
  );
}
