require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { server } = require('./config');
const { swaggerDocument } = require('./src/utils/swagger');
const routes = require('./src/routes');
const { errorHandler } = require('./src/errors-handler');
const { HTTP_STATUS_CODES } = require('./src/constants');

const globalPrefix = '/api';
const { port } = server;
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(globalPrefix, router);

if (server.env !== 'production') {
  app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
  );
}

routes(router);

app.use((req, res) => {
  res.status(HTTP_STATUS_CODES.notFound).send(`The '${req.path}' endpoint is not found`);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  errorHandler(res, err);
});

app.listen(port, () => {
  console.log(`The server is listening on the port ${port}`);
});
