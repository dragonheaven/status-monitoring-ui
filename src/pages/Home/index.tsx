import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SearchInput } from "../../components/SearchInput";
import Pagination from "../../components/Pagination";
import { useServer } from "../../contexts/servers.context";
import ServerTable from "../../components/ServerTable";
import Button from "../../components/Button";
import ServerModal from "../../components/ServerModal";
import { IServer } from "../../shared/interface";
import ServerDetailModal from "../../components/ServerDetailModal";
import useDebounce from "../../hooks/useDebounce";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { servers, fetchServers, removeServer } = useServer();
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedServer, setSelectedServer] = useState<IServer>();
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 300);

  useEffect(() => {
    fetchServers();
  }, [fetchServers]);

  const openModal = useCallback((server?: IServer) => {
    setOpen(true);
    setSelectedServer(server);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openDetailModal = useCallback((server: IServer) => {
    setOpenDetail(true);
    setSelectedServer(server);
  }, []);

  const closeDetailModal = useCallback(() => {
    setOpenDetail(false);
  }, []);

  const onRemove = useCallback((server: IServer) => {
    removeServer(server.uuid);
  }, [removeServer]);

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  const filteredServers = useMemo(() => {
    return servers.filter((server: IServer) => server.name.toLowerCase().indexOf(debounceSearch.toLowerCase()) > -1
      || server.cpu.toLowerCase().indexOf(debounceSearch.toLowerCase()) > -1
      || server.mem.toLowerCase().indexOf(debounceSearch.toLowerCase()) > -1
      || server.state.toLowerCase().indexOf(debounceSearch.toLowerCase()) > -1)
  }, [servers, debounceSearch]);

  const dataSource = useMemo(() => filteredServers.slice((page - 1) * 10, page * 10), [page, filteredServers]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-8">
      <div className="flex justify-between mb-6">
        <SearchInput
          className="w-100"
          value={search}
          placeholder="Search servers..."
          onChange={onChangeSearch}
        />
        <Button
          testId="create-server"
          label="Create Server"
          variant="contained"
          onClick={() => openModal()}
        />
      </div>
      <div>
        <ServerTable
          data={dataSource}
          onEdit={openModal}
          onDetailView={openDetailModal}
          onRemove={onRemove}
        />
      </div>
      {
        filteredServers.length ? (
          <div className="flex justify-center">
            <Pagination
              totalCount={filteredServers.length}
              pageSize={10}
              curPage={page}
              onChange={setPage}
            />
          </div>
        ) : ''
      }

      <ServerModal
        open={open}
        onClose={closeModal}
        server={selectedServer}
      />
      <ServerDetailModal
        server={selectedServer}
        open={openDetail}
        onClose={closeDetailModal}
      />
    </div>
  )
};

export default HomePage;
