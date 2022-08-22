export enum IState {
  STOPPED = 'stopped',
  RUNNING = 'running',
}

export interface IServer {
  mem: string;
  state: IState;
  cpu: string;
  uuid: string;
  name: string;
}
