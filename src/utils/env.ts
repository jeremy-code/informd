import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NEWS_API_KEY: str(),
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
});
