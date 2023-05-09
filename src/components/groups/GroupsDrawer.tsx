import {Button, Col, Drawer, Form, Input, InputNumber, Row, Select} from 'antd';
import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeGroupsDrawer, createGroup} from '@/store/reducers/groups';

export default function GroupsDrawer(): JSX.Element {
  const {open, type} = useAppSelector((state) => state.groupsDrawer);
  const {directions} = useAppSelector((state) => state.directions);

  const dispatch = useAppDispatch();

  const onFinish = (d: Groups.NewGroup): void => {
    void dispatch(createGroup(d));
  };

  const onClose = (): void => {
    void dispatch(closeGroupsDrawer());
  };

  return (
    <Drawer open={open} onClose={onClose} title={`${capitalizeFirstLetter(type)} Group`}>
      <Form layout='vertical' onFinish={onFinish}>
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
        <Form.Item>
          <Button htmlType='submit' block type='primary'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
