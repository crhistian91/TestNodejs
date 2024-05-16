import {
  DataSource,
} from 'typeorm';

import { Home } from '../Entities/Home.class';

let appDataSourceInstance: DataSource;

/**
 * Función encarga de realizar conexión con la BD por medio de TypeORM
 *
 * @author Crhistian Vargas<crhistian.vargas@fvl.org.co>
 * @version 1.0.1
*/
export const getDataSource = async (): Promise<DataSource> => {
  try {
    if (!appDataSourceInstance) {
      console.log('object');
      appDataSourceInstance = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: false,
        logging: false,
        entities: [
          // Entidades
          Home,
        ],
      });
      return appDataSourceInstance.initialize();
    }
    return appDataSourceInstance;
  } catch (err) {
    console.log('Without connection DB');
    console.log(err);
    throw new Error(err);
  }
};
