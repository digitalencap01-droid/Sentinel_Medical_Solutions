import { mkdirSync } from "node:fs";
import path from "node:path";

export function createSitesEnv(projectRoot = process.cwd()) {
  const runtimeRoot = process.env.SITES_RUNTIME_ROOT ?? path.join(projectRoot, ".sites-runtime");

  for (const dir of [
    path.join(runtimeRoot, "home"),
    path.join(runtimeRoot, "npm-cache"),
    path.join(runtimeRoot, "xdg-config"),
    path.join(runtimeRoot, "tmp"),
    path.join(runtimeRoot, "wrangler", "logs"),
  ]) {
    mkdirSync(dir, { recursive: true });
  }

  const env = { ...process.env };
  env.SITES_ENV_READY = "1";
  env.SITES_PROJECT_ROOT = projectRoot;
  env.HOME = path.join(runtimeRoot, "home");
  env.XDG_CONFIG_HOME = path.join(runtimeRoot, "xdg-config");
  env.TMPDIR = path.join(runtimeRoot, "tmp");
  env.WRANGLER_WRITE_LOGS = "false";
  env.WRANGLER_LOG_PATH = path.join(runtimeRoot, "wrangler", "logs");
  env.MINIFLARE_REGISTRY_PATH = path.join(runtimeRoot, "wrangler", "registry");
  env.npm_config_cache = path.join(runtimeRoot, "npm-cache");
  env.npm_config_audit = "false";
  env.npm_config_fund = "false";
  env.npm_config_update_notifier = "false";

  delete env.NPM_CONFIG_CACHE;
  delete env.npm_config_proxy;
  delete env.npm_config_http_proxy;
  delete env.npm_config_https_proxy;
  delete env.NPM_CONFIG_PROXY;
  delete env.NPM_CONFIG_HTTP_PROXY;
  delete env.NPM_CONFIG_HTTPS_PROXY;

  return env;
}
