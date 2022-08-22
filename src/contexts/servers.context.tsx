import React, {useCallback, useState} from 'react';

import * as ServerApi from '../services/server.service';
import {IServer} from "../shared/interface";

const ServersContext = React.createContext({} as any);

function ServerProvider(props: any) {
  const [servers, setServers] = useState<IServer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const fetchServers = useCallback(async (params?: any) => {
    try {
      setLoading(true);
      const res = await ServerApi.getServers(params);

      setServers(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createServer = useCallback(async (data: any) => {
    try {
      setIsSaving(true);
      await ServerApi.createServer(data);
      await fetchServers();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  }, [fetchServers]);

  const updateServer = useCallback(async (id: string, data: any) => {
    try {
      setIsSaving(true);
      await ServerApi.updateServer(id, data);
      await fetchServers();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  }, [fetchServers]);

  const removeServer = useCallback(async (id: string) => {
    setLoading(true);
    await ServerApi.deleteServer(id);
    await fetchServers();
    setLoading(false);
    try {
    } catch (err) {
      console.error(err);
    }
  }, [fetchServers]);

  return (
    <ServersContext.Provider
      value={{
        fetchServers,
        servers,
        loading,
        createServer,
        isSaving,
        removeServer,
        updateServer
      }}
      {...props}
    />
  );
}

function useServer() {
  const context = React.useContext(ServersContext);

  if (context === undefined) {
    throw new Error('useServer must be used within a ServerProvider');
  }
  return context;
}

export { ServerProvider, useServer };
