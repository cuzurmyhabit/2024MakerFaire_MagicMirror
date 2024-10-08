import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY ?? '');
export default genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
