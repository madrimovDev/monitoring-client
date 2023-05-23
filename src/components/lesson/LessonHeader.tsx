import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getLessonByID} from '@/store/reducers/teacher/lessons';
import {Divider, Typography} from 'antd';
import {useParams} from 'react-router-dom';

export default function LessonHeader(): JSX.Element {
  const {lessonID} = useParams();
  const lesson = useAppSelector((state) => getLessonByID(state, lessonID));

  return (
    <>
      <Typography.Title level={3} className='!mb-1'>
        {lesson?.title}
      </Typography.Title>
      <Typography.Text type='secondary'>{lesson?.type}</Typography.Text>
      <Divider />
    </>
  );
}
