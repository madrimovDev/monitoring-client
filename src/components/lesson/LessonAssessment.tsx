import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllAssessments, selectAssessments} from '@/store/reducers/teacher/assessments';
import {EditFilled} from '@ant-design/icons';
import {Button, Table} from 'antd';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';


export default function LessonAssessment(): JSX.Element {
  const {groupID, lessonID} = useParams() as {lessonID: string; groupID: string};
  const {assessments} = useAppSelector(selectAssessments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(
      getAllAssessments({
        groupId: groupID,
        lessonId: lessonID,
      }),
    );
  }, []);

  return (
    <Table
      pagination={false}
      dataSource={assessments ?? []}
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
            return `${record.name}`;
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
