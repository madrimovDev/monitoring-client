import {CriteriaList} from '@/components/criteria';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllCriteria} from '@/store/reducers/teacher/criteria';
import {Col, Row} from 'antd';
import {useEffect} from 'react';

export default function Criteria(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCriteria());
  }, []);
  return (
    <Row className='p-4'>
      <Col offset={1} span={22}>
        <CriteriaList />
      </Col>
    </Row>
  );
}
