import React, { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import {useFormik} from 'formik';
import { IServer, IState } from "../../shared/interface";
import Portal from "../../hoc/Portal";
import { CreateServerSchema } from "../../shared/schemas";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import {useServer} from "../../contexts/servers.context";

export interface IServerModalProps {
  open: boolean;
  onClose: () => void;
  server?: IServer;
}

const stateOptions = [
  {
    label: 'Running',
    value: IState.RUNNING,
  },
  {
    label: 'Stopped',
    value: IState.STOPPED,
  }
];

const initialValues = {
  name: '',
  cpu: '',
  mem: '',
  state: IState.STOPPED,
};

const ServerModal: React.FC<IServerModalProps> = ({
  open,
  onClose,
  server,
}) => {
  const { createServer, updateServer, isSaving } = useServer();

  const onSubmit = useCallback(async (values: any) => {
    if (server) {
      await updateServer(server.uuid, values);
    } else {
      await createServer(values);
    }
    onClose();
  }, [createServer, onClose, server, updateServer]);

  const form = useFormik({
    initialValues,
    validationSchema: CreateServerSchema,
    onSubmit,
    validateOnMount: false,
  });

  useEffect(() => {
    if (!open) return;

    if (server) {
      form.setValues(server);
    } else {
      form.setValues(initialValues);
    }
  }, [server, open]);

  return (
    <Portal>
      {
        open && (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={onClose}
              data-testid="server-modal"
            >
              <div
                className={clsx(
                  'relative w-160 my-6 mx-auto max-w-2xl rounded-lg bg-white',
                )}
                onClick={(e) => e.stopPropagation()}
                data-testid="modal-wrapper"
              >
                <div className="px-6 pt-4 pb-2 text-2xl font-semibold">
                  {server ? 'Edit Server' : 'Create Server'}
                </div>
                <form onSubmit={form.handleSubmit}>
                  <div className="px-6 py-4">
                    <Input
                      placeholder="Name"
                      className="mb-4"
                      {...form.getFieldProps('name')}
                      helperText={form.touched.name ? form.errors.name : ''}
                    />
                    <Input
                      placeholder="CPU"
                      className="mb-4"
                      {...form.getFieldProps('cpu')}
                      helperText={form.touched.cpu ? form.errors.cpu : ''}
                    />
                    <Input
                      placeholder="Memory"
                      className="mb-4"
                      {...form.getFieldProps('mem')}
                      helperText={form.touched.mem ? form.errors.mem : ''}
                    />
                    <Select
                      options={stateOptions}
                      {...form.getFieldProps('state')}
                      onChange={(value) => form.setFieldValue('state', value)}
                    />
                  </div>
                  <div className="flex px-6 pt-2 pb-6 space-x-6 justify-end">
                    <Button
                      label="Cancel"
                      variant="contained"
                      color="error"
                      onClick={onClose}
                    />
                    <Button
                      htmlType="submit"
                      label="Save"
                      variant="contained"
                      color="primary"
                      loading={isSaving}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        )
      }
    </Portal>
  );
};

export default ServerModal;
