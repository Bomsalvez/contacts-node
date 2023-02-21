import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Contacts } from '@modules/contact/typeorm/entity/Contacts';

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
  entities: [Contacts],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
});

