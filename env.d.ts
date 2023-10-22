declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_CONNECTION: string;
    BASE_URL: string;
    PORT: string;
  }
}
