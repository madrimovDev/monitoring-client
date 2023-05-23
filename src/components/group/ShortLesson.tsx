import dayjs, {type Dayjs} from 'dayjs';
import {Button, List} from 'antd';
import {EditFilled, DeleteFilled} from '@ant-design/icons';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getLessonDataByDate, openLessonsDrawer} from '@/store/reducers/teacher/lessons';
import {useAppSelector} from '@/store/hooks/useAppSelector';

const ShortLesson = ({date}: {date: Dayjs}): JSX.Element => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => getLessonDataByDate(state, date));

  const openDrawerForCreate = (date: Dayjs): void => {
    dispatch(openLessonsDrawer({date: date.toISOString()}));
  };

  if (data === undefined || data === null) {
    return (
      <div className='group h-full grid place-items-center'>
        <Button
          onClick={() => {
            openDrawerForCreate(date);
          }}
          type='ghost'
          size='large'
          className='-mt-6 opacity-0 group-hover:opacity-100'
        >
          +
        </Button>
      </div>
    );
  }

  return (
    <>
      <List>
        <List.Item
          actions={[
            <Button key='edit' size='small' type='ghost' className='!grid place-items-center !text-teal-400'>
              <EditFilled />
            </Button>,
            <Button key='delete' size='small' type='ghost' danger className='!grid place-items-center !text-red-400'>
              <DeleteFilled />
            </Button>,
          ]}
        >
          <List.Item.Meta title={data.title} description={data.type} />
        </List.Item>
      </List>
    </>
  );
};

export default ShortLesson;
