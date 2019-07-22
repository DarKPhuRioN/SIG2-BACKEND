import { Pool, PoolClient, ConnectionConfig } from "pg";

export const DatabaseProvider = {
  provide: 'dbconnection',
  useFactory: async (config): Promise<ConnectionConfig> => {
    return await new Pool(config.db) as PoolClient;
  },
  inject: ['config']
};