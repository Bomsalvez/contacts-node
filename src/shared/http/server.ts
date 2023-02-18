import 'reflect-metadata';
import { AppDataSource } from '@config/database/data-source';
import { app } from '@shared/http/app';

AppDataSource.initialize().then(() => {
  app.listen(8088, () => {
    console.log('server start');
  });
});
