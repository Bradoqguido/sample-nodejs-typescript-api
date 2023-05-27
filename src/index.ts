import { createServer } from './server';
import { loggers } from './services/logger';

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(parseInt(port.toString()), '0.0.0.0', () => {
  loggers.api.info(`api running on ${port}`);
});
