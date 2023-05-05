import {type ReactNode, Suspense as ReactSuspense} from 'react';
import LoadingPage from './LoadingPage';

export default function Suspense(prop: {component: ReactNode}): JSX.Element {
  return (
    <ReactSuspense fallback={<LoadingPage />}>{prop.component}</ReactSuspense>
  );
}
