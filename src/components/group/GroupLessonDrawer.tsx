import {capitalizeFirstLetter} from '@/lib';
import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {selectCriteria} from '@/store/reducers/teacher/criteria';
import {closeLessonsDrawer, createLesson, lessonsDrawer} from '@/store/reducers/teacher/lessons';
import {Button, DatePicker, Drawer, Form, Input, Radio, Select} from 'antd';
import dayjs, {type Dayjs} from 'dayjs';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

type FormData = {
  [key in keyof Lessons.NewLesson]: key extends 'date' ? Dayjs : Lessons.NewLesson[key];
};

export default function GroupLessonDrawer(): JSX.Element {
  const {open, type, date, data} = useAppSelector(lessonsDrawer);
  const {groupID} = useParams();
  const {criterias} = useAppSelector(selectCriteria);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onClose = (): void => {
    dispatch(closeLessonsDrawer());
    form.resetFields();
  };

  const onFinish = (formData: FormData): void => {
    if (type === 'create' && groupID !== undefined) {
      void dispatch(
        createLesson({
          id: +groupID,
          newLesson: {
            ...formData,
            date: formData.date.toISOString(),
          },
        }),
      );
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      form.setFields([
        {
          name: 'title',
          value: data.title,
        },
        {
          name: 'type',
          value: data.type,
        },
        {
          name: 'date',
          value: dayjs(data.date),
        },
        {
          name: 'criteria',
          value: {
            label: data.criteria.name,
            value: data.criteria.id,
          },
        },
      ]);
    }
  }, [data]);

  useEffect(() => {
    if (date !== undefined) {
      form.setFieldValue('date', dayjs(date));
    }
  }, [date]);

  return (
    <Drawer title={`${capitalizeFirstLetter(type)} Lesson`} onClose={onClose} open={open}>
      <Form onFinish={onFinish} form={form} layout='vertical'>
        <Form.Item name='title' label='Title' rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item name='type' label='Type' rules={[{required: true}]}>
          <Radio.Group>
            <Radio value='lesson'>Lesson</Radio>
            <Radio value='practice'>Practice</Radio>
            <Radio value='exam'>Exam</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Date' name='date' rules={[{required: true}]}>
          <DatePicker className='!w-full' />
        </Form.Item>
        <Form.Item name='criteria' label='Criteria' rules={[{required: true}]}>
          <Select
            placeholder='Select Criteria'
            options={
              criterias?.map((c) => ({
                label: c.name,
                value: c.id,
              })) ?? []
            }
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' block>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
