// libs/client.js
import { createClient } from "microcms-js-sdk";

//ブログ作成API取得
export const client = createClient({
  serviceDomain: "jockblog",
  apiKey: process.env.API_KEY,
});
