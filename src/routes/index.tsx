import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import bg from 'assets/bg.png';

const routes = [
  // Menu
  { path: '/', component: lazy(() => import('pages/Home')) },
  { path: '/discover', component: lazy(() => import('pages/Discover')) },
  { path: '/about', component: lazy(() => import('pages/About')) },
  { path: '/minting', component: lazy(() => import('pages/Minting')) },
  { path: '/trading', component: lazy(() => import('pages/Trading')) },
  { path: '/game', component: lazy(() => import('pages/Game')) },
  // Wallet
  { path: '/connect', component: lazy(() => import('pages/ConnectWallet')) },
];
function ComposeRoutes() {
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: '100%',
            height: 'auto',
            backgroundSize: 'cover',
          }}
        >
          <Header />
          <Routes>
            {routes.map(({ component, path }, i) => {
              const PageComponent = component;
              return <Route key={i} path={path} element={<PageComponent />} />;
            })}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default ComposeRoutes;
export { ComposeRoutes };
