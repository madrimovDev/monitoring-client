import {type PropsWithChildren} from 'react';
import {Layout, Typography} from 'antd';

export default function RootSider(props: PropsWithChildren): JSX.Element {
  return (
    <Layout.Sider className='!fixed !overflow-auto !left-0 !top-0 !bottom-0'>
      <div className='px-4 py-3'>
        <Typography.Title
          className='flex justify-center active:bg-blue-500 active:scale-75 transition-all bg-gray-500/30 py-2 rounded-md !mb-0 !text-2xl !text-white'
          level={5}
        >
          <span className='mr-2'>DATA</span>
          <span className='text-blue-400'>M</span>
          <span className='text-blue-500'>S</span>
        </Typography.Title>
      </div>
      {props.children}
    </Layout.Sider>
  );
}
