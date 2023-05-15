import {DirectionsTable} from '@/components/directions';
import DirectionsModal from '@/components/directions/DirectionsModal';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllDirections, openDirectionModal} from '@/store/reducers/admin/directions';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

export default function Directions(): JSX.Element {
  const dispatch = useAppDispatch();

  const openModal = (): void => {
    dispatch(openDirectionModal());
  };

  useEffect(() => {
    void dispatch(getAllDirections());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={6} span={12}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary' onClick={openModal}>
            Create Direction
          </Button>
        </Space>
        <DirectionsTable />
      </Col>
      <Outlet />
      <DirectionsModal />
    </Row>
  );
}
