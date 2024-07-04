import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(process.cwd(), '.env') });

export default {
  PORT: process.env.PORT || 8080,
  db_url: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce-db',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
};
