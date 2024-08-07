// src/server.js

import pino from 'pino-http';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import router from './routers/index.js';

import { env } from './utils/env.js';

import { UPLOAD_DIR } from './constants/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use(router);

  app.use('*', notFoundHandler);

  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
