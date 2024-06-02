// src/db/initMongoDB.js

import mongoose from 'mongoose';

import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    const user = env('Uzurch1k');
    const pwd = env('cvHgOusveH1FD2xD');
    const url = env('cluster0.1ado6tg.mongodb.net');
    const db = env('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/?retryWrites=true&w=majority`
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
