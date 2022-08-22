import React from 'react';

import { ServerProvider } from './servers.context';

function AppProviders({ children }: { children: any }) {
  return (
    <ServerProvider>
      {children}
    </ServerProvider>
  );
}

export default AppProviders;
