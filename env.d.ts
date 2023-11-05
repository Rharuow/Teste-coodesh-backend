declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_CONNECTION: string;
    MONGODB_CONNECTION_TEST: string;
    BASE_URL: string;
    PORT: string;
  }
}
