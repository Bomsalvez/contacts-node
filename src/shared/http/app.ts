import routes from '@shared/routes';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
