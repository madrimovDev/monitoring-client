import {CriteriaDrawer, CriteriaList} from '@/components/criteria';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getAllCriteria, openCriteriaDrawer} from '@/store/reducers/teacher/criteria';
import {Button, Col, Divider, Row, Typography} from 'antd';
import {useEffect} from 'react';

export default function Criteria(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCriteria());
  }, []);

  const openDrawer = (): void => {
    dispatch(openCriteriaDrawer());
  };

  return (
    <>
      <Row className='p-4'>
        <Col offset={1} span={22}>
          <Typography.Title level={2}>Criteria</Typography.Title>
          <Button type='primary' onClick={openDrawer}>
            Create Criteria
          </Button>
          <Divider />
          <CriteriaList />
        </Col>
      </Row>
      <CriteriaDrawer />
    </>
  );
}
