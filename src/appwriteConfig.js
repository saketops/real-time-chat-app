import { Client, Account, Databases } from 'appwrite';

//export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
//export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES;
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'https://default-api-endpoint.com';
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || 'default-project-id';
// Add similar fallbacks for DATABASE_ID and COLLECTION_ID_MESSAGES if needed


// Check if API_ENDPOINT is defined before setting up the client
if (!API_ENDPOINT) {
    throw new Error("API_ENDPOINT is not defined");
}

// Check if PROJECT_ID is defined before setting up the client
if (!PROJECT_ID) {
    throw new Error("PROJECT_ID is not defined");
}

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
