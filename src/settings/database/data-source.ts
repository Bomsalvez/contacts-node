import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateContact1677193679580 } from '../migrations/1677193679580-CreateContact';
import { CreatePhonenumber1678748039514 } from '../migrations/1678748039514-CreatePhonenumber';
import { Contacts } from '../../model/contact/entity/Contact';
import { Phonenumber } from '../../model/phonenumber/entity/Phonenumber';

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
  entities: [Contacts,Phonenumber],
  migrations: [CreateContact1677193679580,CreatePhonenumber1678748039514],
});



