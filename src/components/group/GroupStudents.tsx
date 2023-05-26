import {Card, Table} from 'antd';
import {useParams} from 'react-router-dom';
import {useGetGroupStudents} from './lib/useGetGroupStudents';

export default function GroupStudents(): JSX.Element {
  const {groupID} = useParams();
  const {data, isLoading} = useGetGroupStudents(groupID);
  return (
    <Card title='Students' bodyStyle={{padding: 0}}>
      <Table
        loading={isLoading}
        rowKey={(item) => item.id}
        dataSource={data?.students ?? []}
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
              return `${record.name} ${record.surname}`;
            },
          },
          {
            key: 'Phone',
            title: 'Phone',
            render(_, record) {
              return `${record.phone}`;
            },
          },
        ]}
      />
    </Card>
  );
}
