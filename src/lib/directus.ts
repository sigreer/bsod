import { createDirectus, rest, } from '@directus/sdk';
import dotenv from 'dotenv';

dotenv.config();


type Bsod = {
  headline: string;
  error_message: string;
  error_description: string;
  button1: string;
  button1_link: string;
  button2: string;
  button2_link: string;
  penguin: string;
}

type Schema = {
  bsod: Bsod;
}

const directus = createDirectus<Schema>(process.env.DIRECTUS_URL).with(rest());

export default directus;