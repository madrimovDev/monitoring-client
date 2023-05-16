import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeAdminDrawer, createAdmin, selectAdminsDrawer, updateAdmin} from '@/store/reducers/admin/admins';
import {Button, Drawer, Form, Input} from 'antd';
import {useEffect} from 'react';

export default function AdminsDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector(selectAdminsDrawer);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<Admins.CreateAdmin>();

  const onClose = (): void => {
    form.resetFields();
    void dispatch(closeAdminDrawer());
  };

  const onFinish = ($data: Admins.CreateAdmin): void => {
    if (type === 'create') {
      void dispatch(createAdmin($data));
    } else if (type === 'update' && data !== undefined) {
      void dispatch(
        updateAdmin({
          admin: $data,
          id: data.id,
        }),
      );
    }
  };

  useEffect(() => {
    if (data !== null && data !== undefined) {
      form.setFields([
        {
          name: 'username',
          value: data.username,
        },
        {
          name: 'name',
          value: data.name,
        },
      ]);
    }
  }, [data]);

  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Admin`}>
      <Form form={form} onFinish={onFinish} layout='vertical' autoComplete='off' autoCorrect='off'>
        <Form.Item name='name' label='Name'>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input.Password />
        </Form.Item>
        <Button block type='primary' htmlType='submit'>
          Create
        </Button>
      </Form>
    </Drawer>
  );
}
