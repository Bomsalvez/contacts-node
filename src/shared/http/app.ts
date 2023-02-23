import routes from '@shared/routes';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import resourceExceptionHandler from "@settings/exception/ResourceExceptionHandler";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(resourceExceptionHandler);

export { app };
