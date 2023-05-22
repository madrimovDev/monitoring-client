import dayjs, {type Dayjs} from 'dayjs';
import {Button, List} from 'antd';
import {EditFilled, DeleteFilled} from '@ant-design/icons';

const ShortLesson = ({date, lessons}: {date: Dayjs; lessons: Lessons.Lesson[] | null}): JSX.Element => {
  const data = lessons?.find((lesson) => {
    if (dayjs(lesson?.date).month() === date.month() && dayjs(lesson?.date).date() === date.date()) {
      return lesson;
    }
    return false;
  });

  if (data === undefined) {
    return (
      <div className='group h-full grid place-items-center'>
        <Button type='ghost' size='large' className='-mt-6 opacity-0 group-hover:opacity-100'>
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
