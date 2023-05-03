import {type ReactNode, Suspense as ReactSuspense} from 'react';

export default function Suspense(prop: {component: ReactNode}): JSX.Element {
  return <ReactSuspense fallback='Loading...'>{prop.component}</ReactSuspense>;
}
