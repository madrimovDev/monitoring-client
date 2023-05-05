import {Spin} from 'antd';

export default function LoadingPage(): JSX.Element {
  return (
    <div className='fixed inset-0 bg-white/20 w-screen h-screen grid place-items-center'>
      <Spin tip='Loading' />
    </div>
  );
}
