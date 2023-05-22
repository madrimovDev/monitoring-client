import {useEffect} from 'react';
import {Calendar} from 'antd';
import dayjs from 'dayjs';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllLessons, getLessons} from '@/store/reducers/teacher/lessons';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useParams} from 'react-router-dom';
import localDate from 'dayjs/plugin/localeData';
import ShortLesson from './ShortLesson';
import GroupLessonDrawer from './GroupLessonDrawer';

dayjs.extend(localDate);

export default function GroupLessons(): JSX.Element {
  const {lessons} = useAppSelector(getLessons);
  const {groupID} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (groupID !== undefined) {
      void dispatch(getAllLessons(+groupID));
    }
  }, []);
  return (
    <>
      <div className='container mx-auto'>
        <Calendar
          validRange={[dayjs('2020').startOf('years'), dayjs('2024').endOf('year')]}
          cellRender={(date) => <ShortLesson date={date} lessons={lessons} />}
        />
        <GroupLessonDrawer />
      </div>
    </>
  );
}
