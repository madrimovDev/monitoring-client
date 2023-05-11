import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllTeachers} from '@/store/reducers/teachers';
import {Button, Form, Modal, Select} from 'antd';
import {useEffect} from 'react';
import {type RefetchQueryFilters, type RefetchOptions, type QueryObserverResult, useMutation} from 'react-query';
import {useParams} from 'react-router-dom';

interface GroupAddTeacherProp<TData = unknown, TError = unknown> {
  open: boolean;
  onClose: () => void;
  teacher: Groups.Teacher | null;
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>,
  ) => Promise<QueryObserverResult<TData, TError>>;
}

export default function GroupAddTeacher(props: GroupAddTeacherProp): JSX.Element | null {
  const {teachers, loading} = useAppSelector((state) => state.teachers);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const {groupID} = useParams();

  const onClose = (): void => {
    form.resetFields();
    props.onClose();
  };

  const {isLoading, mutate} = useMutation({
    mutationKey: 'changeTeacher',
    mutationFn: async (data: {teacherId: number}) => {
      const orgId = await getUserDataFromLocalStorage('organizationId');

      if (orgId === null) throw new Error('Organization id not found');

      const response = await api.put(`organizations/${orgId}/groups/${groupID ?? ''}/teacher`, data);
      return response.data;
    },
    onSuccess(data): void {
      showNotification('info', data.message);
      onClose();
      void props.refetch();
    },
  });

  const onFinish = (data: {teacherId: number | {label: string; value: number}}): void => {
    if (typeof data.teacherId === 'object') {
      mutate({
        teacherId: data.teacherId.value,
      });
    } else if (typeof data.teacherId === 'number') {
      mutate({
        teacherId: data.teacherId,
      });
    }
  };

  useEffect(() => {
    if (teachers === null) {
      void dispatch(getAllTeachers());
    }
  }, []);

  useEffect(() => {
    if (props.teacher !== null) {
      form.setFieldValue('teacherId', {
        label: `${props.teacher.name} ${props.teacher.surname}`,
        value: props.teacher.id,
      });
    }
  }, [props.teacher]);

  return (
    <Modal onCancel={onClose} open={props.open} title='Change Teacher' footer={false}>
      <Form onFinish={onFinish} form={form} className='!mt-6'>
        <Form.Item name='teacherId' label='Teacher'>
          <Select
            loading={loading || isLoading}
            showSearch
            filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={teachers?.map((teacher) => {
              return {
                label: `${teacher.name} ${teacher.surname}`,
                value: teacher.id,
              };
            })}
          />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Change
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
