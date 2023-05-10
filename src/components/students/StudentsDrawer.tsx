import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeStudentsDrawer} from '@/store/reducers/students';
import {Button, Drawer, Form, Input} from 'antd';

export default function StudentsDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector((state) => state.studentsDrawer);
  const dispatch = useAppDispatch();
  const onClose = (): void => {
    dispatch(closeStudentsDrawer());
  };
  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Student`}>
      <Form layout='vertical'>
        <Form.Item name='name' label='Name'>
          <Input />
        </Form.Item>
        <Form.Item name='surname' label='Surname'>
          <Input />
        </Form.Item>
        <Form.Item name='phone' label='Phone'>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button block type='primary'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
