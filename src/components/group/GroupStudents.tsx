import {Card, Table} from 'antd';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {getGroupStudents, selectGroupStudents} from '@/store/reducers/teacher/group-students';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';

export default function GroupStudents(): JSX.Element {
  const {groupID} = useParams();
  const { loading, students } = useAppSelector(selectGroupStudents);
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(getGroupStudents(groupID))
  }, [])

  return (
    <Card title='Students' bodyStyle={{padding: 0}}>
      <Table
        pagination={false}
        loading={loading}
        rowKey={(item) => item.id}
        dataSource={students ?? []}
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
