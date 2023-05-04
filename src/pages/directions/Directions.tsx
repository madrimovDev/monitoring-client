import {DirectionsTable} from '@/components/directions';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllDirections} from '@/store/reducers/directions';
import {Col, Row} from 'antd';
import {useEffect} from 'react';

export default function Directions(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getAllDirections());
  }, []);
  return (
    <Row>
      <Col offset={6} span={12}>
        <DirectionsTable />
      </Col>
    </Row>
  );
}
