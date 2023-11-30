import express from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/users/user.route';
import handleError from './middleware/errorHandlingMiddleware';

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/api/users', UserRoutes);
app.use('/api/users', UserRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(handleError);
export default app;
