import {useAppSelector} from '@/store/hooks/useAppSelector';
import {selectCriteria} from '@/store/reducers/teacher/criteria';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Card, Col, List, Row, Typography} from 'antd';

export default function CriteriaList(): JSX.Element {
  const {criterias, loading} = useAppSelector(selectCriteria);
  return (
    <>
      <Row gutter={16}>
        {criterias?.map((cri) => {
          return (
            <Col span={6} key={cri.id}>
              <Card
                loading={loading}
                hoverable
                bordered
                title={cri.name.length > 0 ? cri.name : 'No title'}
                extra={[
                  <Button
                    key='edit'
                    className='!border-teal-500 !text-teal-500 !inline-flex justify-center items-center mr-2'
                    size='small'
                    icon={<EditFilled />}
                  />,
                  <Button
                    key='edit'
                    className='!inline-flex justify-center items-center '
                    danger
                    size='small'
                    icon={<DeleteFilled />}
                  />,
                ]}
              >
                <Card.Meta description={cri.description.length > 0 ? cri.description : 'No desc'} />
                <List
                  dataSource={cri.scroings}
                  header={<Typography.Text className='font-bold'>Maximum: {cri.maximum}</Typography.Text>}
                  renderItem={(item) => {
                    return (
                      <List.Item>
                        <List.Item.Meta title={item.description} description={item.value} />
                      </List.Item>
                    );
                  }}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
