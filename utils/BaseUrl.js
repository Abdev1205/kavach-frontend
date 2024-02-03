import dotenv from 'dotenv';
dotenv.config();

export const yems = process.env.API_URL;

const ApiUrl = yems

export {
  ApiUrl
}
