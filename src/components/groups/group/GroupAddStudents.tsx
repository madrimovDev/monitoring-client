import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllStudents, selectFilteredStudents} from '@/store/reducers/admin/students';
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
                    label: student.name,
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
