import dotenv from 'dotenv';
import db from './db/database';
import scheduler from './scheduler/scheduler';

dotenv.config();

console.log('Background worker started...');

db.initialize();
scheduler.initialize();
