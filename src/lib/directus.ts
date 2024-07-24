import { createDirectus, rest, } from '@directus/sdk';

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

const directus = createDirectus<Schema>('http://directus.simongreer.co.uk').with(rest());

export default directus;