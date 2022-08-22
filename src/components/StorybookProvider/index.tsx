import React, { ReactNode } from 'react';
import {ServerProvider} from "../../contexts/servers.context";

interface StorybookProviderProps {
  children: ReactNode;
}

const StorybookProvider: React.FC<StorybookProviderProps> = ({ children }) => {
  return (
    <ServerProvider>
      <div id="modal-root" />
      {children}
    </ServerProvider>
  )
}

export default StorybookProvider;
