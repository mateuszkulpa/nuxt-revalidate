import { revalidateRoute } from "../utils/revalidateRoute";
import {
  createError,
  defineEventHandler,
  getQuery,
  useRuntimeConfig,
} from "#imports";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { path, key } = getQuery(event);

  if (path === undefined) {
    throw createError({
      status: 400,
      message: "Missing `path` query parameter",
    });
  }

  if (runtimeConfig.revalidate.key && key !== runtimeConfig.revalidate.key)
    throw createError({
      status: 403,
      message: "Invalid revalidation key",
    });

  await revalidateRoute(String(path));

  return "OK";
});
