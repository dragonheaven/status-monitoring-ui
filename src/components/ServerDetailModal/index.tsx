import React from 'react';
import clsx from 'clsx';
import { IServer, IState } from "../../shared/interface";
import Portal from "../../hoc/Portal";
import Button from "../Button";
import Badge from "../Badge";

export interface IServerDetailModalProps {
  open: boolean;
  onClose: () => void;
  server?: IServer;
}

const ServerDetailModal: React.FC<IServerDetailModalProps> = ({
  open,
  onClose,
  server,
}) => {
  return (
    <>
      {open && (
        <Portal>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={onClose}
            data-testid="server-detail-modal"
          >
            <div
              className={clsx(
                'relative w-120 my-6 mx-auto max-w-2xl rounded-lg bg-white',
              )}
              onClick={(e) => e.stopPropagation()}
              data-testid="modal-wrapper"
            >
              <div className="px-6 pt-4 pb-2 text-2xl font-semibold text-center">
                {server?.name}
              </div>
              <div className="px-6">
                <div className="flex justify-between py-2">
                  <div>Name:</div>
                  <div>{server?.name}</div>
                </div>
                <div className="flex justify-between py-2">
                  <div>CPU:</div>
                  <div>{server?.cpu}</div>
                </div>
                <div className="flex justify-between py-2">
                  <div>Memory:</div>
                  <div>{server?.mem}</div>
                </div>
                <div className="flex justify-between py-2">
                  <div>State:</div>
                  <div>
                    <Badge
                      label={server?.state === IState.RUNNING ? 'Running' : 'Stopped'}
                      type={server?.state === IState.RUNNING ? 'primary' : 'secondary' }
                    />
                  </div>
                </div>
              </div>
              <div className="flex px-6 pt-4 pb-6 space-x-6 justify-center">
                <Button label="Ok" onClick={onClose} className="w-24" />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </Portal>
      )}
    </>
  );
};

export default ServerDetailModal;
