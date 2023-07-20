import { fileURLToPath } from "node:url";
import {
  addServerHandler,
  createResolver,
  defineNuxtModule,
  useLogger,
} from "@nuxt/kit";
import defu from "defu";

export interface ModuleOptions {
  key?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-revalidate",
    configKey: "revalidate",
  },
  setup(options, nuxt) {
    const logger = useLogger("nuxt-revalidate");

    const key = options.key || process.env.REVALIDATE_KEY;

    if (!key) {
      logger.warn(
        "Revalidate endpoint is not protected! Set `revalidate.key` in nuxt config or REVALIDATE_KEY in .env",
      );
    }

    nuxt.options.runtimeConfig.revalidate = defu(
      nuxt.options.runtimeConfig.revalidate,
      { key },
    );

    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    addServerHandler({
      route: "/__revalidate__",
      handler: resolve(runtimeDir, "server/routes/__revalidate__"),
    });
  },
});
