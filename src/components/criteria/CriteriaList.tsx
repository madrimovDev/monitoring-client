import {useAppDispatch} from '@/store/hooks/useAppDispatch';
import {useAppSelector} from '@/store/hooks/useAppSelector';
import {deleteCriteria, openCriteriaDrawerWithData, selectCriteria} from '@/store/reducers/teacher/criteria';
import type {Criteria} from '@/store/reducers/teacher/criteria/types';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import {Button, Card, Col, List, Row, Typography} from 'antd';

export default function CriteriaList(): JSX.Element {
  const {criterias} = useAppSelector(selectCriteria);
  const dispatch = useAppDispatch();
  const onDelete = (id: number): void => {
    void dispatch(deleteCriteria(id));
  };

  const onEdit = (criteria: Criteria.Criteria): void => {
    dispatch(openCriteriaDrawerWithData(criteria));
  };
  
  return (
    <>
      <Row gutter={[16, 16]}>
        {criterias?.map((cri) => {
          return (
            <Col span={6} key={cri.id}>
              <Card
                hoverable
                bordered
                title={cri.name.length > 0 ? cri.name : 'No title'}
                extra={[
                  <Button
                    key='edit'
                    className='!border-teal-500 !text-teal-500 !inline-flex justify-center items-center mr-2'
                    size='small'
                    onClick={() => {
                      onEdit(cri);
                    }}
                    icon={<EditFilled />}
                  />,
                  <Button
                    key='delete'
                    className='!inline-flex justify-center items-center '
                    danger
                    size='small'
                    onClick={() => {
                      onDelete(cri.id);
                    }}
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
                      <List.Item key={item.id}>
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
