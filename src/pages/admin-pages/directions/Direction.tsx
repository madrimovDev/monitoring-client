import {api} from '@/api';
import {usePathItem} from '@/hooks/usePathItem';
import {capitalizeFirstLetter, getUserDataFromLocalStorage} from '@/lib';
import {Col, Divider, List, Row, Space, Spin, Table, Tag, Typography} from 'antd';
import {useQuery} from 'react-query';
import {Link, useParams} from 'react-router-dom';

export default function Direction(): JSX.Element | null {
  const {directionID} = useParams();
  const path = usePathItem(1);

  const {data, isFetching} = useQuery({
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

  if (isFetching)
    return (
      <div className='w-full h-full grid place-items-center'>
        <Spin size='large' spinning />
      </div>
    );

  if (data === undefined) {
    return null;
  }

  return (
    <Row className='px-4 pt-10'>
      <Col offset={1} span={22}>
        <Space>
          <Typography.Title className='flex items-center gap-2'>
            {capitalizeFirstLetter(data.direction.name)} Yo&apos;nalishi
            <Tag color='blue'>{data.direction.status}</Tag>
          </Typography.Title>
        </Space>
        <List className='w-1/6'>
          <List.Item actions={[data.direction.groups.length]}>
            <List.Item.Meta title='Groups' />
          </List.Item>
          <List.Item actions={[data.direction.teachers.length]}>
            <List.Item.Meta title='Teachers' />
          </List.Item>
        </List>
        <Divider />
        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={4}>Groups</Typography.Title>
            <Table
              dataSource={data.direction.groups}
              pagination={false}
              bordered
              rowKey={(item) => item.id}
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
                    return <Link to={`/${path}/groups/${record.id}`}>{record.name}</Link>;
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
                    if (record.teacher === null) return 'Teacher not found';
                    return <Link to={`/${path}/teachers/${record.teacher?.id ?? ''}`}>{record.teacher?.name}</Link>;
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
              rowKey={(item) => item.id}
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
                  title: 'Name',
                  render(_, record) {
                    return (
                      <Link to={`/${path}/teachers/${record.id}`}>
                        {record.name} {record.surname}
                      </Link>
                    );
                  },
                },
                {
                  key: 'status',
                  title: 'Status',
                  render(_, record) {
                    return <Tag color={record.status === 'active' ? 'blue' : 'red'}>{record.status}</Tag>;
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
