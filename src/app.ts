import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { registerRoutes } from './routes/index';
import { authMiddleware } from './middlewares/auth.middleware';
import { errorHandler } from './middlewares/error.middleware';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger';

const app = express();

app.use(cors());

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(authMiddleware);

registerRoutes(app);

app.use(errorHandler);

export default app;
