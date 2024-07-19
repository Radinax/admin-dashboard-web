import { request } from "@/api/auth";
import { ZodSchema, output } from "zod";

export async function getJSON<T extends ZodSchema>(
  pathname: string,
  schema: T
): Promise<output<T>> {
  const json = await request(pathname).json();
  console.log("json", json);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return schema.parse(json);
}
