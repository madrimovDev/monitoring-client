import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllStudents, selectFilteredStudents} from '@/store/reducers/admin/students';
import {Button, Form, Modal, Select} from 'antd';
import {memo, useEffect} from 'react';
import {useParams} from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
  addStudent: (data: {studentId: number[]}) => void;
}

function GroupAddStudents(props: Props): JSX.Element {
  const {groupID} = useParams();
  const students = useAppSelector((state) => selectFilteredStudents(state, groupID));
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (data: {studentId: number[]}): void => {
    props.addStudent(data);
  };

  useEffect(() => {
    if (props.open) {
      void dispatch(getAllStudents());
    }
  }, [props.open]);

  return (
    <Modal
      open={props.open}
      onCancel={() => {
        props.onClose();
        form.resetFields();
      }}
      title={'Add Students'}
      footer={false}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='studentId' label='Students'>
          <Select
            placeholder='Select Students'
            showSearch
            filterOption={(input, option) => {
              const label = option?.label ?? '';
              return label.toLocaleString().toLowerCase().includes(input);
            }}
            filterSort={(optionA, optionB) => {
              const labelA = optionA?.label ?? '';
              const labelB = optionB?.label ?? '';
              return labelA.toLocaleString().localeCompare(labelB.toLocaleString());
            }}
            mode='multiple'
            options={
              Array.isArray(students)
                ? students.map((student) => ({
                    label: `${student.name} ${student.surname}`,
                    value: student.id,
                  }))
                : []
            }
          />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(GroupAddStudents);
