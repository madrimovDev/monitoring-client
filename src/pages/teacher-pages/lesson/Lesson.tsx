import {LessonAssessment, LessonHeader} from '@/components/lesson';
import LessonMaterial from '@/components/lesson/LessonMaterial';
import {Col, Row, Tabs} from 'antd';

export default function Lesson(): JSX.Element {
  return (
    <Row className='py-10'>
      <Col span={22} offset={1}>
        <LessonHeader />
        <Tabs
          size='large'
          items={[
            {
              key: 'material',
              label: 'Material',
              children: <LessonMaterial />,
            },
            {
              key: 'assets',
              label: 'Assessments',
              children: <LessonAssessment />,
            },
          ]}
        />
      </Col>
    </Row>
  );
}
