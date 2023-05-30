import {Card, Col, Divider, Row, Tabs} from 'antd';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';
import {useEffect, useState} from 'react';
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
        value: 200,
      },
      {
        id: 2,
        title: 'Teachers',
        value: 7,
      },
      {
        id: 3,
        title: 'Groups',
        value: 8,
      },
    ],
  },
  {
    id: 2,
    title: 'Backend',
    stats: [
      {
        id: 1,
        title: 'Students',
        value: 150,
      },
      {
        id: 2,
        title: 'Teachers',
        value: 6,
      },
      {
        id: 3,
        title: 'Groups',
        value: 7,
      },
    ],
  },
  {
    id: 3,
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
  {
    id: 4,
    title: 'SMM',
    stats: [
      {
        id: 1,
        title: 'Students',
        value: 160,
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
  const [activeKey, setActiveKey] = useState('1');
  const [dir, setDir] = useState(directionStat.find((d) => d.id.toString() === activeKey));
  const onChange = (k: string): void => {
    setActiveKey(k);
  };

  useEffect(() => {
    setDir(directionStat.find((d) => d.id.toString() === activeKey));
  }, [activeKey]);

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
        <div className='grid grid-cols-2 gap-10'>
          <Tabs
            className='bg-gray-400/5 rounded-md shadow-md'
            onChange={(k) => {
              onChange(k);
            }}
            tabPosition='left'
            items={directionStat.map((ds) => ({
              key: `${ds.id}`,
              label: ds.title,
              children: (
                <Bar
                  data={{
                    labels: dir?.stats.map((d) => d.title),
                    datasets: [
                      {
                        label: '',
                        data: dir?.stats.map((s) => s.value),
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
              ),
            }))}
          />
          <Tabs
            className='bg-gray-400/5 rounded-md shadow-md'
            onChange={(k) => {
              onChange(k);
            }}
            tabPosition='left'
            items={directionStat.map((ds) => ({
              key: `${ds.id}`,
              label: ds.title,
              children: (
                <Bar
                  data={{
                    labels: dir?.stats.map((d) => d.title),
                    datasets: [
                      {
                        label: '',
                        data: dir?.stats.map((s) => s.value),
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
              ),
            }))}
          />
        </div>
      </Col>
    </Row>
  );
}
export default Dashboard;
