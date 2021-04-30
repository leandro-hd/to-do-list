import express from 'express';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';

import { router } from './routes';

const app = express();

nunjucks.configure('src/views/pages', {
  express: app,
  noCache: true,
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

export { app };