import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateContact1677193679580 } from '../migrations/1677193679580-CreateContact';
import { Contacts } from '../../model/contact/entity/Contact';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'umaSenhaAi',
  database: 'db_contacts',
  synchronize: false,
  migrationsRun: true,
  logging: false,
  entities: [Contacts],
  migrations: [CreateContact1677193679580],
});



