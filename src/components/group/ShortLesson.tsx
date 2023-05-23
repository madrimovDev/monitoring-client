import {type Dayjs} from 'dayjs';
import {Button, List} from 'antd';
import {EditFilled, DeleteFilled, EyeFilled} from '@ant-design/icons';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {getLessonDataByDate, openLessonsDrawer, openLessonsDrawerWithData} from '@/store/reducers/teacher/lessons';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {useNavigate} from 'react-router-dom';

const ShortLesson = ({date}: {date: Dayjs}): JSX.Element => {
  const data = useAppSelector((state) => getLessonDataByDate(state, date));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const redirectLesson = (): void => {
    navigate(`lesson/${data.id}`);
  };

  const openDrawerForUpdate = (): void => {
    dispatch(openLessonsDrawerWithData(data));
  };

  return (
    <>
      <List className='group h-full'>
        <List.Item className='flex-col !items-start !py-0'>
          <div>
            <h5 className='font-bold text-xs'>{data.title}</h5>
            <p className='text-xs text-gray-500 mb-2'>{data.type}</p>
          </div>
          <div className=''>
            <Button.Group className='group-hover:opacity-100 opacity-0  transition-all '>
              <Button
                onClick={openDrawerForUpdate}
                size='small'
                type='ghost'
                className='!inline-grid place-items-center !text-teal-500'
              >
                <EditFilled />
              </Button>
              <Button danger size='small' type='ghost' className='!inline-grid place-items-center !text-red-500'>
                <DeleteFilled />
              </Button>
              <Button
                onClick={redirectLesson}
                size='small'
                type='ghost'
                className='!inline-grid place-items-center !text-sky-500'
              >
                <EyeFilled />
              </Button>
            </Button.Group>
          </div>
        </List.Item>
      </List>
    </>
  );
};

export default ShortLesson;
