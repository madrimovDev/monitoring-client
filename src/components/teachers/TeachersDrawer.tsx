import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getAllDirections} from '@/store/reducers/directions';
import {closeTeacherDrawer, createTeacher, updateTeacher} from '@/store/reducers/teachers';
import {Button, Drawer, Form, Input, Select} from 'antd';
import {useEffect} from 'react';

export default function TeachersDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector((state) => state.teacherDrawer);
  const {directions, loading} = useAppSelector((state) => state.directions);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<Omit<Teachers.NewTeacher, 'id'>>();

  const onClose = (): void => {
    form.resetFields();
    dispatch(closeTeacherDrawer());
  };

  const onFinish = ($data: Teachers.NewTeacher): void => {
    if (type === 'create') {
      void dispatch(createTeacher($data)).then((value) => {
        if (value.meta.requestStatus === 'fulfilled') {
          onClose();
        }
      });
    } else if (type === 'update' && data !== undefined) {
      void dispatch(
        updateTeacher({
          teacher: $data,
          id: data.id,
        }),
      );
    }
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
        {
          name: 'directions',
          value: data.directions.map((dir) => ({label: dir.name, value: dir.id})),
        },
      ]);
    }
  }, [data]);

  useEffect(() => {
    if (directions === null) {
      void dispatch(getAllDirections());
    }
  }, []);

  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Teacher`}>
      <Form onFinish={onFinish} layout='vertical' form={form}>
        <Form.Item name='name' label='Name' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='surname' label='Surname' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='Username' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password' rules={[{required: data === undefined}]}>
          <Input />
        </Form.Item>
        <Form.Item name='phone' label='Phone' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='directions' label='Directions' rules={[{required: true}]}>
          <Select
            showSearch
            mode='multiple'
            loading={loading}
            placeholder='Select Directions'
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={directions?.map((dir) => {
              return {
                label: dir.name,
                value: dir.id,
              };
            })}
          />
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
