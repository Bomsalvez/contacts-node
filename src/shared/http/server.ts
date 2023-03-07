import 'reflect-metadata';
import { app } from '@shared/http/app';
import { AppDataSource } from '@settings/database/data-source';

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log('server start');
  });
});
