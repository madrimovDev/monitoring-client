import {useEffect} from 'react';
import {Calendar} from 'antd';
import dayjs from 'dayjs';
import {getAllLessons} from '@/store/reducers/teacher/lessons';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useParams} from 'react-router-dom';
import localDate from 'dayjs/plugin/localeData';
import ShortLesson from './ShortLesson';
import GroupLessonDrawer from './GroupLessonDrawer';

dayjs.extend(localDate);

export default function GroupLessons(): JSX.Element {
  const {groupID} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (groupID !== undefined) {
      void dispatch(getAllLessons(+groupID));
    }
  }, []);
  return (
    <>
      <div className='container mx-auto px-10'>
        <Calendar
          validRange={[dayjs('2020').startOf('years'), dayjs('2024').endOf('year')]}
          cellRender={(date) => <ShortLesson key={date.date()} date={date} />}
        />
        <GroupLessonDrawer />
      </div>
    </>
  );
}
