import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeAssessmentModal, selectAssessmentModal} from '@/store/reducers/teacher/assessments';
import {Button, Form, Input, InputNumber, Modal} from 'antd';

export default function LessonAssessmentModal(): JSX.Element {
  const {open} = useAppSelector(selectAssessmentModal);
  const dispatch = useAppDispatch();

  const onClose = (): void => {
    dispatch(closeAssessmentModal());
  };
  return (
    <Modal open={open} onCancel={onClose} title={`type Assessment`} footer={false}>
      <Form layout='vertical'>
        <Form.Item name='score' label='Score'>
          <InputNumber className='!w-full' />
        </Form.Item>
        <Form.Item name='comment' label='Comment'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type='primary' block>
            Set
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
