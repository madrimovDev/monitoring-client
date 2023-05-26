import {EditFilled} from '@ant-design/icons';
import {Button, Table} from 'antd';

const data = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    assessment: {
      id: 1,
      score: -1,
      comment: '',
      studentId: 1,
      lessonId: 101,
      groupId: 1,
    },
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    assessment: {
      id: 2,
      score: 75,
      comment: 'Needs improvement in certain areas.',
      studentId: 2,
      lessonId: 101,
      groupId: 1,
    },
  },
  {
    id: 3,
    name: 'David',
    surname: 'Johnson',
    assessment: {
      id: 3,
      score: 95,
      comment: 'Outstanding performance!',
      studentId: 3,
      lessonId: 102,
      groupId: 2,
    },
  },
  {
    id: 4,
    name: 'Emily',
    surname: 'Wilson',
    assessment: {
      id: 4,
      score: 88,
      comment: 'Well done!',
      studentId: 4,
      lessonId: 102,
      groupId: 2,
    },
  },
  {
    id: 5,
    name: 'Michael',
    surname: 'Johnson',
    assessment: {
      id: 5,
      score: 92,
      comment: 'Great effort!',
      studentId: 5,
      lessonId: 103,
      groupId: 3,
    },
  },
  {
    id: 6,
    name: 'Sarah',
    surname: 'Davis',
    assessment: {
      id: 6,
      score: 70,
      comment: 'Work on understanding the concepts better.',
      studentId: 6,
      lessonId: 103,
      groupId: 3,
    },
  },
  {
    id: 7,
    name: 'Daniel',
    surname: 'Wilson',
    assessment: {
      id: 7,
      score: 69,
      comment: 'Showing improvement!',
      studentId: 7,
      lessonId: 104,
      groupId: 1,
    },
  },
  {
    id: 8,
    name: 'Olivia',
    surname: 'Anderson',
    assessment: {
      id: 8,
      score: 78,
      comment: 'Keep up the good work!',
      studentId: 8,
      lessonId: 104,
      groupId: 1,
    },
  },
  {
    id: 9,
    name: 'Ethan',
    surname: 'Brown',
    assessment: {
      id: 9,
      score: 85,
      comment: 'Consistently performs well.',
      studentId: 9,
      lessonId: 105,
      groupId: 3,
    },
  },
  {
    id: 10,
    name: 'Sophia',
    surname: 'Martinez',
    assessment: {
      id: 10,
      score: 91,
      comment: 'Excellent job!',
      studentId: 10,
      lessonId: 105,
      groupId: 3,
    },
  },
];

export default function LessonAssessment(): JSX.Element {
  return (
    <Table
      dataSource={data}
      columns={[
        {
          key: 'index',
          title: '№',
          render(_, _record, index) {
            return index + 1;
          },
        },
        {
          key: 'Name',
          title: 'Name',
          render(_, record) {
            return `${record.name} ${record.surname}`;
          },
        },
        {
          key: 'assessment score',
          title: 'Assessment Score',
          render(_, record) {
            const score = record.assessment.score;
            if (record.assessment.score < 1) {
              return <div className='text-red-500 font-bold'>0</div>;
            }
            if (score < 50 && score > 0) {
              return <div className='text-red-500 font-bold'>{score}</div>;
            }
            if (score > 50 && score < 70) {
              return <div className='text-orange-500 font-bold'>{score}</div>;
            }
            return <div className='text-sky-500 font-bold'>{score}</div>;
          },
        },
        {
          key: 'assessment comment',
          title: 'Assessment Comment',
          render(_, record) {
            return record.assessment.comment;
          },
        },
        {
          key: 'edit',
          title: '',
          render(_) {
            return (
              <Button type='primary' size='small' className='!bg-teal-500 !inline-grid place-items-center'>
                <EditFilled />
              </Button>
            );
          },
        },
      ]}
    />
  );
}
