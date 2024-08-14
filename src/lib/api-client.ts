import ky from "ky";
import { env } from "./env";

export const api = ky.extend({
  prefixUrl: env.API_URL,
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // TO-DO handle error response via afterResponse
});
