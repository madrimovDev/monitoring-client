import {Card, Col, Divider, Row} from 'antd';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';
const basicStat = [
  {
    id: 1,
    title: 'Groups',
    value: 100,
  },
  {
    id: 2,
    title: 'Students',
    value: 900,
  },
  {
    id: 3,
    title: 'Directions',
    value: 20,
  },
  {
    id: 4,
    title: 'Teachers',
    value: 15,
  },
];

const directionStat = [
  {
    id: 1,
    title: 'Frontend',
    stats: [
      {
        id: 1,
        title: 'Students',
        value: 120,
      },
      {
        id: 2,
        title: 'Teachers',
        value: 5,
      },
      {
        id: 3,
        title: 'Groups',
        value: 6,
      },
    ],
  },
  {
    id: 1,
    title: 'Backend',
    stats: [
      {
        id: 1,
        title: 'Students',
        value: 120,
      },
      {
        id: 2,
        title: 'Teachers',
        value: 5,
      },
      {
        id: 3,
        title: 'Groups',
        value: 6,
      },
    ],
  },
  {
    id: 1,
    title: 'Python',
    stats: [
      {
        id: 1,
        title: 'Students',
        value: 120,
      },
      {
        id: 2,
        title: 'Teachers',
        value: 5,
      },
      {
        id: 3,
        title: 'Groups',
        value: 6,
      },
    ],
  },
];

function Dashboard(): JSX.Element {
  return (
    <Row className='p-4'>
      <Col span={22} offset={1}>
        <h2 className='text-3xl'>Basic Statistics</h2>
        <div className='grid grid-cols-4 gap-4'>
          {basicStat.map((s) => (
            <Card key={s.id} hoverable bordered>
              <h2 className='text-2xl text-black/50'>{s.title}</h2>
              <p className='text-4xl m-0'>{s.value}</p>
            </Card>
          ))}
        </div>
        <Divider />
        <h2 className='text-3xl'>Directions Statistics</h2>
        <Row>
          {directionStat.map((ds) => {
            return (
              <Col span={12} key={ds.id}>
                <Bar
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        font: {size: 30},
                        text: ds.title
                      },
                    },
                  }}
                  className='!w-full'
                  data={{
                    labels: ds.stats.map((st) => st.title),
                    datasets: [
                      {
                        label: '',
                        data: ds.stats.map((ss) => ss.value),
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(255, 159, 64, 0.2)',
                          'rgba(255, 205, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(201, 203, 207, 0.2)',
                        ],
                        borderColor: [
                          'rgb(255, 99, 132)',
                          'rgb(255, 159, 64)',
                          'rgb(255, 205, 86)',
                          'rgb(75, 192, 192)',
                          'rgb(54, 162, 235)',
                          'rgb(153, 102, 255)',
                          'rgb(201, 203, 207)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
export default Dashboard;
