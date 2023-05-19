import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {closeCriteriaDrawer, createCriteria, selectCriteriaDrawer} from '@/store/reducers/teacher/criteria';
import type {Criteria} from '@/store/reducers/teacher/criteria/types';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Drawer, Form, Input, InputNumber} from 'antd';
import {useEffect} from 'react';

export default function CriteriaDrawer(): JSX.Element {
  const {open, type, data} = useAppSelector(selectCriteriaDrawer);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<Criteria.NewCriteria>();

  const closeDrawer = (): void => {
    dispatch(closeCriteriaDrawer());
    form.resetFields();
  };

  const onFinish = (data: Criteria.NewCriteria): void => {
    void dispatch(createCriteria(data)).then(() => {
      closeDrawer();
    });
  };

  useEffect(() => {
    if (data !== null || data === undefined) {
      form.setFieldsValue({
        name: data?.name,
        description: data?.description,
        maximum: data?.maximum,
        scorings: data?.scroings.map((s) => ({
          value: s.value,
          description: s.description,
        })) ?? [],
      });
    }
  }, [data]);

  return (
    <Drawer open={open} size='large' onClose={closeDrawer} title={`${capitalizeFirstLetter(type)} Criteria`}>
      <Form onFinish={onFinish} layout='vertical' form={form}>
        <Form.Item name='name' label='Name' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='description' label='Description' rules={[{required: true}]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          name='maximum'
          label='Maximum'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber className='!w-full' />
        </Form.Item>
        <Form.List
          name='scorings'
          rules={[
            {
              validator: async (_, scoring) => {
                if (scoring === null || scoring === undefined || scoring.length < 1) {
                  return await Promise.reject(new Error('The score should not be less than 1'));
                }
              },
            },
          ]}
        >
          {(fields, {add, remove}, {errors}) => {
            return (
              <>
                {fields.map(({key, name}, index) => {
                  return (
                    <div className='w-full grid grid-cols-[1fr_1fr_auto] items-center gap-4' key={key}>
                      <Form.Item label='Description' rules={[{required: true}]} name={[name, 'description']}>
                        <Input />
                      </Form.Item>
                      <Form.Item label='Value' rules={[{required: true}]} name={[name, 'value']}>
                        <InputNumber className='!w-full' />
                      </Form.Item>
                      <Button
                        type='text'
                        className='!inline-grid place-items-center'
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        {index}
                        <MinusCircleOutlined />
                      </Button>
                    </div>
                  );
                })}
                <Form.Item>
                  <Button
                    block
                    type='dashed'
                    className='!flex items-center justify-center !border-blue-500'
                    icon={<PlusOutlined />}
                    onClick={() => {
                      add();
                    }}
                  >
                    Add
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            );
          }}
        </Form.List>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
