import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeAssessmentModal, selectAssessmentModal, setAssessments} from '@/store/reducers/teacher/assessments';
import {Button, Form, Input, InputNumber, Modal} from 'antd';
import {useParams} from 'react-router-dom';

interface Assessment {
  score: number;
  comment: string;
}

export default function LessonAssessmentModal(): JSX.Element {
  const {open, data} = useAppSelector(selectAssessmentModal);
  const dispatch = useAppDispatch();
  const {groupID, lessonID} = useParams();
  const onClose = (): void => {
    dispatch(closeAssessmentModal());
  };

  const onFinish = (formData: Assessment): void => {
    void dispatch(
      setAssessments({
        groupId: groupID,
        lessonId: lessonID,
        assessmentId: data?.assessment?.id,
        ...formData,
      }),
    );
  };

  return (
    <Modal open={open} onCancel={onClose} title={`type Assessment`} footer={false}>
      <Form onFinish={onFinish} layout='vertical'>
        <Form.Item name='score' rules={[{required: true}]} label='Score'>
          <InputNumber min={0} className='!w-full' />
        </Form.Item>
        <Form.Item name='comment' label='Comment' rules={[{required: true}]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' block>
            Set
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
