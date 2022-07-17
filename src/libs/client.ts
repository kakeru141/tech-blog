import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'web-output',
    apiKey: process.env.API_KEY || '',
});