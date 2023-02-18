import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@braTe07',
  database: 'db_contacts',
  synchronize: false,
  migrationsRun: true,
  logging: false,
  entities: [],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
});
