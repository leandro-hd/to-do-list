import * as dotenv from 'dotenv';

dotenv.config();

import { app } from './app';

app.listen(3333, () => {
  console.log('Server is running...');
});