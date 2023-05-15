import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeDirectionModal, createDirection, updateDirection} from '@/store/reducers/admin/directions';
import {Button, Form, Input, Modal} from 'antd';
import {useEffect} from 'react';

export default function DirectionsModal(): JSX.Element {
  const {open, type, data} = useAppSelector((state) => state.directionsModal);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onClose = (): void => {
    form.resetFields();
    dispatch(closeDirectionModal());
  };

  const onFinish = (_data: {name: string}): void => {
    if (type === 'create') {
      void dispatch(createDirection(_data.name));
    } else if (type === 'update' && data !== undefined) {
      void dispatch(updateDirection({name: _data.name, id: data.id}));
    }
    form.resetFields();
  };

  useEffect(() => {
    if (data !== null && data !== undefined) {
      form.setFields([
        {
          name: 'name',
          value: data.name,
        },
      ]);
    }
  }, [data]);

  return (
    <Modal open={open} onCancel={onClose} footer={null} title={`${capitalizeFirstLetter(type)} Direction`}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='name' label='Name' required>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
