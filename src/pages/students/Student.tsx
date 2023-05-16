import {Col, Row} from 'antd';
import {StudentInfo} from '@/components/students';

export default function Student(): JSX.Element {  
  return (
    <Row className='p-4'>
      <Col span={22} offset={1}>
        <StudentInfo  />
      </Col>
    </Row>
  );
}
