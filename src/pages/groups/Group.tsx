import {Col, Row} from 'antd';
import {GroupHeader, GroupTable} from '@/components/groups';

export default function Group(): JSX.Element | null {
  return (
    <Row className='px-4 pt-10'>
      <Col offset={1} span={22}>
        <Row gutter={24}>
          <Col span={6}>
            <GroupHeader />
          </Col>
          <Col span={18}>
            <GroupTable />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
