import React, { lazy, Suspense } from 'react';
import FullPageLoader from '../../../shared/component/fullPageLoader/fullPageLoader';

const LazyHomePage = lazy(() => import('./homePage'));

const HomePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<FullPageLoader component='Home Page'/>}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
