import React from 'react';
import { Table } from "../Table";
import {IServer, IState} from "../../shared/interface";
import Badge from "../Badge";
import Icon from "../Icon";

export interface TvTableProps {
  data: IServer[];
  onEdit?: (server: IServer) => void;
  onRemove?: (server: IServer) => void;
  onDetailView?: (server: IServer) => void;
}

const ServerTable: React.FC<TvTableProps> = ({
  data,
  onEdit = () => {},
  onRemove = () => {},
  onDetailView = () => {},
}) => {
  const columns = [
    {
      label: 'Name',
      value: 'name',
      className: 'bg-blue-700 text-white w-120',
    },
    {
      label: 'CPU',
      value: 'cpu',
      className: 'bg-blue-700 text-white',
    },
    {
      label: 'Memory',
      value: 'mem',
      className: 'bg-blue-700 text-white',
    },
    {
      label: 'State',
      value: 'state',
      className: 'bg-blue-700 text-white',
      render: (state: IState) => (
        <Badge label={state === IState.RUNNING ? 'Running' : 'Stopped'} type={state === IState.RUNNING ? 'primary' : 'secondary' } />
      )
    },
    {
      label: 'Actions',
      value: 'action',
      className: 'bg-blue-700 text-white',
      render: (_: any, row: IServer) => (
        <div className="flex space-x-2 text-gray-700">
          <div
            className="hover:bg-gray-300 h-8 w-8 flex items-center justify-center cursor-pointer rounded"
            onClick={() => onEdit(row)}
            data-testid="edit-server"
          >
            <Icon icon="pen" />
          </div>
          <div
            className="hover:bg-gray-300 h-8 w-8 flex items-center justify-center cursor-pointer rounded"
            onClick={() => onRemove(row)}
            data-testid="delete-server"
          >
            <Icon icon="trash" />
          </div>
          <div
            className="hover:bg-gray-300 h-8 w-8 flex items-center justify-center cursor-pointer rounded"
            onClick={() => onDetailView(row)}
            data-testid="view-server"
          >
            <Icon icon="file" />
          </div>
        </div>
      )
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      className="w-full mb-6"
    />
  )
};

export default ServerTable;
