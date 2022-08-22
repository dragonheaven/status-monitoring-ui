import serverData from '../data/data.json';
import { IServer } from "../shared/interface";

let servers: IServer[] = [...serverData] as any;

export async function getServers(params: any) {
  return servers;
}

export async function createServer(data: any) {
  servers = [...servers, {
    uuid: Math.random().toString(12),
    ...data
  }];

  return servers;
}

export async function retrieveServer(id: string) {
  return servers.find((server) => server.uuid === id);
}

export async function updateServer(id: string, data: any) {
  servers = servers.map((server) => server.uuid === id ? data : server);
  return servers;
}

export async function deleteServer(id: string) {
  servers = servers.filter((server) => server.uuid !== id);
  return servers;
}
