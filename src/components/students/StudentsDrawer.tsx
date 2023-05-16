import {useEffect} from 'react';
import {Button, Drawer, Form, Input} from 'antd';
import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import { closeStudentsDrawer, createStudent, selectStudentsDrawer } from '@/store/reducers/admin/students';

export default function StudentsDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector(selectStudentsDrawer);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<Omit<Students.NewStudent, 'birthday'>>();
  const onClose = (): void => {
    dispatch(closeStudentsDrawer());
    form.resetFields();
  };

  const onFinish = (data: Omit<Students.NewStudent, 'birthday'>): void => {
    if (type === 'create') {
      void dispatch(createStudent(data));
    }
    form.resetFields();
  };

  useEffect(() => {
    if (data !== undefined) {
      form.setFields([
        {
          name: 'name',
          value: data.name,
        },
        {
          name: 'surname',
          value: data.surname,
        },
        {
          name: 'username',
          value: data.username,
        },
        {
          name: 'phone',
          value: data.phone,
        },
      ]);
    }
  }, [data]);

  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Student`}>
      <Form onFinish={onFinish} form={form} layout='vertical'>
        <Form.Item name='name' label='Name' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='surname' label='Surname' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='phone' label='Phone' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='Username' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
