import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllDirections, selectDirections} from '@/store/reducers/admin/directions';
import {getAllTeachers, selectTeachers} from '@/store/reducers/admin/teachers';
import type {AxiosErrorWithMessage} from '@/store/types';
import {Button, Col, Form, Input, InputNumber, Modal, Row, Select} from 'antd';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {useParams} from 'react-router-dom';

interface GroupAddTeacherProp {
  open: boolean;
  onClose: () => void;
  group: Groups.Group | null;
  changeData: (data: Groups.GroupResponse) => void;
}

export default function GroupAddTeacher(props: GroupAddTeacherProp): JSX.Element | null {
  const {teachers, loading} = useAppSelector(selectTeachers);
  const {directions} = useAppSelector(selectDirections);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const {groupID} = useParams();

  const onClose = (): void => {
    form.resetFields();
    props.onClose();
  };

  const {isLoading, mutate} = useMutation({
    mutationKey: 'changeTeacher',
    mutationFn: async (data: Groups.NewGroup & {teacherId: number}) => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const {teacherId, ...rest} = data;
      const {data: groupData} = await api.put<Groups.GroupResponse>(
        `organizations/${orgId}/groups/${groupID ?? ''}`,
        rest,
      );

      if (teacherId === undefined) {
        return groupData;
      }
      const {data: teacherData} = await api.put(`organizations/${orgId}/groups/${groupID ?? ''}/teacher`, {teacherId});
      const returnData: Groups.GroupResponse = {
        message: groupData.message,
        group: {
          ...groupData.group,
          teacher: teacherData.teacher,
        },
      };
      return returnData;
    },
    onSuccess(data): void {
      showNotification('info', data.message);
      onClose();
      props.changeData(data);
    },
    onError(err) {
      const e = err as AxiosErrorWithMessage;
      showNotification('error', e.response?.data.message ?? '');
    },
  });

  const onFinish = (data: Groups.NewGroup & {teacherId: number | {label: string; value: number}}): void => {
    if (typeof data.teacherId === 'object') {
      mutate({
        ...data,
        teacherId: data.teacherId.value,
      });
    } else if (typeof data.teacherId === 'number') {
      mutate({
        ...data,
        teacherId: data.teacherId,
      });
    }
  };

  useEffect(() => {
    if (props.open) {
      void dispatch(getAllTeachers());
      void dispatch(getAllDirections());
    }
  }, [props.open]);

  useEffect(() => {
    if (!props.open) return;
    if (props.group === null) return;
    if (props.group.teacher === null) return;
    form.setFields([
      {
        name: 'teacherId',
        value: {
          label: `${props.group.teacher.name} ${props.group.teacher.surname}`,
          value: props.group.teacher.id,
        },
      },
      {
        name: 'name',
        value: props.group.name,
      },
      {
        name: 'months',
        value: props.group.months,
      },
      {
        name: 'directionId',
        value: props.group.direction.id,
      },
    ]);
  }, [props.open]);

  return (
    <Modal onCancel={onClose} open={props.open} title='Change Teacher' footer={false}>
      <Form onFinish={onFinish} layout='vertical' form={form} className='!mt-6'>
        <Form.Item name='name' label='Name' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Row gutter={4}>
          <Col span={12}>
            <Form.Item rules={[{required: true}]} name='months' label='Month'>
              <InputNumber style={{width: '100%'}} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item rules={[{required: true}]} name='directionId' label='Direction'>
              <Select
                placeholder='Direction'
                options={directions?.map((dir) => {
                  return {
                    label: dir.name,
                    value: dir.id,
                  };
                })}
              />
            </Form.Item>
          </Col>
        </Row>
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
