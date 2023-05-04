import { Button, Drawer, Form, Input, Typography } from "antd";

export default function AdminsDrawer(): JSX.Element {
  return (
    <Drawer open>
      <Typography.Text className='block !text-xl mb-4'>Create Admin</Typography.Text>
      <Form layout="vertical" autoComplete="off" autoCorrect="off">
        <Form.Item name='name' label='Name'>
          <Input />
        </Form.Item>
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input.Password />
        </Form.Item>
        <Button block type="primary">
          Create
        </Button>
      </Form>
    </Drawer>
  );
}
