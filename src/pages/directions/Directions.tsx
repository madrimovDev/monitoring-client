import {DirectionsTable} from '@/components/directions';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllDirections} from '@/store/reducers/directions';
import {Button, Col, Row, Space} from 'antd';
import {useEffect} from 'react';

export default function Directions(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllDirections());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={6} span={12}>
        <Space className='justify-end w-full my-10'>
          <Button type='primary'>Create Direction</Button>
        </Space>
        <DirectionsTable />
      </Col>
    </Row>
  );
}
