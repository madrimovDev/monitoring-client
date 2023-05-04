import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeAdminDrawer, createAdmin} from '@/store/reducers/admins';
import {Button, Drawer, Form, Input} from 'antd';

export default function AdminsDrawer(): JSX.Element {
  const {open, type} = useAppSelector((state) => state.adminsDrawer);
  const dispatch = useAppDispatch();

  const onClose = (): void => {
    void dispatch(closeAdminDrawer());
  };

  const onFinish = (data: Admins.CreateAdmin): void => {
    void dispatch(createAdmin(data));
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={`${capitalizeFirstLetter(type)} Admin`}
    >
      <Form
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'
        autoCorrect='off'
      >
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
