import dotenv from 'dotenv'
dotenv.config({path: '.env'});

export const BASE_URL = process.env.BASE_URL || 'http://localhost:8000/'
export const isTest = process.env.isTest || true;
