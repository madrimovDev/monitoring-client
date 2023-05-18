import DirectionsModal from '@/components/directions/DirectionsModal';
import {Outlet} from 'react-router-dom';

export default function DirectionWrapper(): JSX.Element {
  return (
    <>
      <Outlet />
      <DirectionsModal />
    </>
  );
}
