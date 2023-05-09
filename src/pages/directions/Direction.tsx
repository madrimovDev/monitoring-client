import {api} from '@/api';
import {capitalizeFirstLetter, getUserDataFromLocalStorage} from '@/lib';
import {Col, Divider, List, Row, Space, Table, Tag, Typography} from 'antd';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';

export default function Direction(): JSX.Element {
  const {directionID} = useParams();
  const {data, isLoading} = useQuery({
    queryKey: 'direction',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('OrgId not Found');
      const response = await api.get<Directions.DirectionDetailsResponse>(
        `organizations/${orgId}/directions/${directionID ?? ''}`,
      );
      return response.data;
    },
  });
  return (
    <Row className='p-4'>
      <Col offset={1} span={22}>
        <Space>
          <Typography.Title className='flex items-center gap-2'>
            {capitalizeFirstLetter(data?.direction.name ?? '')} Yo&apos;nalishi{' '}
            <Tag color='blue'>{data?.direction.status}</Tag>
          </Typography.Title>
        </Space>
        <Divider/>
        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={4}>Groups</Typography.Title>
            <Table
              dataSource={data?.direction.groups}
              pagination={false}
              bordered
              columns={[
                {
                  key: 'index',
                  title: '№',
                  render(_, _record, index) {
                    return index + 1;
                  },
                },
                {
                  key: 'name',
                  title: 'Name',
                  render(_, record) {
                    return record.name;
                  },
                },
                {
                  key: 'months',
                  title: 'Months',
                  render(_, record) {
                    return record.months;
                  },
                },
                {
                  key: 'teacher',
                  title: 'Teacher',
                  render(_, record) {
                    return record.teacher?.name ?? 'Teacher not found';
                  },
                },
                {
                  key: 'student',
                  title: 'Students',
                  render(_, record) {
                    return record._count.students;
                  },
                },
              ]}
            />
          </Col>
          <Col span={12}>
            <Typography.Title level={4}>Teachers</Typography.Title>
            <Table
              pagination={false}
              bordered
              dataSource={data?.direction.teachers}
              columns={[
                {
                  key: 'index',
                  title: '№',
                  render(_, _record, index) {
                    return index + 1;
                  },
                },
                {
                  key: 'Name',
                  title: 'name',
                  render(_, record) {
                    return record.name;
                  },
                },
                {
                  key: 'Phone',
                  title: 'Phone',
                  render(_, record) {
                    return record.phone;
                  },
                },
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
