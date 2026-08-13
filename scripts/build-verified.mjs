import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

import { createSitesEnv } from "./sites-env.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const env = createSitesEnv(projectRoot);
const binDir = path.join(projectRoot, "node_modules", ".bin");
const isWindows = process.platform === "win32";
const vinext = path.join(binDir, isWindows ? "vinext.cmd" : "vinext");

if (!existsSync(vinext)) {
  console.error("vinext is unavailable. Run npm install and wait for it to finish before building.");
  process.exit(69);
}

console.log("Running verified vinext build...");
const build = spawnSync(vinext, ["build"], {
  cwd: projectRoot,
  env,
  shell: isWindows,
  stdio: "inherit",
  timeout: 180000,
});

if (build.error) {
  console.error(build.error.message);
  process.exit(1);
}

if (typeof build.status === "number" && build.status !== 0) {
  process.exit(build.status);
}

const validate = spawnSync(process.execPath, [path.join(scriptDir, "validate-artifact.mjs")], {
  cwd: projectRoot,
  env,
  stdio: "inherit",
});

if (validate.error) {
  console.error(validate.error.message);
  process.exit(1);
}

process.exit(validate.status ?? 0);
