import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ConnectWallet0 from './ConnectWallet0';
import ConnectWallet1 from './ConnectWallet1';

function ConnectWalletRoutes() {
  return (
    <Routes>
      <Route path="/0" element={<ConnectWallet0 />} />
      <Route path="/1" element={<ConnectWallet1 />} />
    </Routes>
  );
}

export default ConnectWalletRoutes;
