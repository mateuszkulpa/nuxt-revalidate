import { hash } from "ohash";
import { parseURL } from "ufo";
import { useStorage } from "#imports";

// Based on nitro codebase:  https://github.com/unjs/nitro/blob/14670c94d8f11f24525295f55ed427ac616fc643/src/runtime/cache.ts#L204
function generateCacheKey(url: string) {
  function escapeKey(key: string) {
    return key.replace(/[^\dA-Za-z]/g, "");
  }

  const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
    0,
    16,
  );
  const urlHash = hash(url);
  return `${friendlyName}.${urlHash}`;
}

export async function revalidateRoute(url: string) {
  const storage = useStorage();

  const urlCacheKey = generateCacheKey(url);
  const routeCacheKey = `cache:nitro:routes:_:${urlCacheKey}.json`;
  await storage.removeItem(routeCacheKey);
}
