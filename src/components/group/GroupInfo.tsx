import {Col, Row} from 'antd';
import GroupDetail from './GroupDetail';
import GroupStudents from './GroupStudents';

export default function GroupInfo(): JSX.Element {
  return (
    <Row gutter={16} className='py-10'>
      <Col span={22} offset={1}>
        <Row gutter={16}>
          <Col span={6}>
            <GroupDetail />
          </Col>
          <Col span={18}>
            <GroupStudents />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
