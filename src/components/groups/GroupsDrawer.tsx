import {Button, Col, Drawer, Form, Input, InputNumber, Row, Select} from 'antd';
import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeGroupsDrawer, createGroup, updateGroup} from '@/store/reducers/groups';
import {useEffect} from 'react';

interface FormData {
  directionId: number;
  months: number;
  name: string;
  teacherId: number;
}

export default function GroupsDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector((state) => state.groupsDrawer);
  const {directions} = useAppSelector((state) => state.directions);
  const {teachers, loading} = useAppSelector((state) => state.teachers);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const onFinish = (d: FormData): void => {
    if (type === 'create') {
      void dispatch(createGroup(d));
    } else if (type === 'update' && data !== undefined) {
      void dispatch(updateGroup({group: d, id: data.id}));
    }
  };
  const onClose = (): void => {
    form.resetFields();
    void dispatch(closeGroupsDrawer());
  };

  useEffect(() => {
    if (data !== undefined) {
      form.setFields([
        {
          name: 'name',
          value: data.name,
        },
        {
          name: 'months',
          value: data.months,
        },
        {
          name: 'directionId',
          value: data.direction.id,
        },
        {
          name: 'teacherId',
          value: data?.teacher?.id,
        },
      ]);
    }
  }, [data]);

  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Group`}>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        <Form.Item rules={[{required: true}]} name='name' label='Name'>
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
        <Form.Item label='Teacher' name='teacherId'>
          <Select
            allowClear
            loading={loading}
            placeholder='Select Teacher'
            options={teachers?.map((teacher) => {
              return {
                label: `${teacher.name} ${teacher.surname}`,
                value: teacher.id,
              };
            })}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' block type='primary'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
