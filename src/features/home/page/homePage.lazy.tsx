import React, { lazy, Suspense } from 'react';
import FullPageLoader from '../../../shared/component/FullPageLoader/FullPageLoader';

const LazyHomePage = lazy(() => import('./HomePage'));

const HomePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<FullPageLoader component='Home Page'/>}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
