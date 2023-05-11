import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllStudents} from '@/store/reducers/students';
import {selectFilteredStudents} from '@/store/reducers/students/studentsSelectors';
import {Button, Form, Modal, Select} from 'antd';
import {memo, useEffect} from 'react';
import {useMutation, type QueryObserverResult, type RefetchOptions, type RefetchQueryFilters} from 'react-query';
import {useParams} from 'react-router-dom';

interface Props<TData = unknown, TError = unknown> {
  open: boolean;
  onClose: () => void;
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>,
  ) => Promise<QueryObserverResult<TData, TError>>;
}
function GroupAddStudents(props: Props): JSX.Element {
  const {groupID} = useParams();
  const students = useAppSelector((state) => selectFilteredStudents(state, groupID));
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const {mutate} = useMutation({
    mutationKey: 'add-students',
    mutationFn: async (data: {studentId: number[]}) => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const response = await api.post(`organizations/${orgId}/groups/${groupID ?? ''}/students`, data);
      return response.data;
    },
    onSuccess(data) {
      showNotification('info', data.message);
      props.onClose();
      form.resetFields();
      void props.refetch();
    },
  });

  const onFinish = (data: {studentId: number[]}): void => {
    mutate(data);
  };

  useEffect(() => {
    if (props.open) {
      void dispatch(getAllStudents());
    }
  }, [props.open]);

  return (
    <Modal open={props.open} onCancel={props.onClose} title={'Add Students'} footer={false}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='studentId' label='Students'>
          <Select
            placeholder='Select Students'
            showSearch
            filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            mode='multiple'
            options={students.map((student) => {
              return {
                label: `${student.name} ${student.surname}`,
                value: student.id,
              };
            })}
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
