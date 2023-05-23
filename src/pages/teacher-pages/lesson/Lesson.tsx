import {LessonHeader} from '@/components/lesson';
import LessonMaterial from '@/components/lesson/LessonMaterial';
import {Col, Row} from 'antd';

export default function Lesson(): JSX.Element {
  return (
    <Row className='py-10'>
      <Col span={22} offset={1}>
        <LessonHeader />
        <LessonMaterial />
      </Col>
    </Row>
  );
}
