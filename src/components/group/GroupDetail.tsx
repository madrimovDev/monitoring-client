import {Card, List} from 'antd';
import {useGetGroupDetails} from './lib/useGetGroupDetails';
import {useParams} from 'react-router-dom';

export default function GroupDetail(): JSX.Element {
  const {groupID} = useParams();
  const {data, isLoading} = useGetGroupDetails(groupID);
  return (
    <Card title='Group Details' bodyStyle={{padding: 0}}>
      <List
        loading={isLoading}
        size='large'      >
        <List.Item>
          <List.Item.Meta description='Name:' />
          <div>{data?.group?.name}</div>
        </List.Item>
        <List.Item>
          <List.Item.Meta description='Direction:' />
          <div>{data?.group?.direction?.name}</div>
        </List.Item>
        <List.Item>
          <List.Item.Meta description='Months:' />
          <div>{data?.group?.months}</div>
        </List.Item>
        <List.Item>
          <List.Item.Meta description='Teacher:' />
          <div>
            {data?.group?.teacher?.name} {data?.group?.teacher?.surname}
          </div>
        </List.Item>
      </List>
    </Card>
  );
}
