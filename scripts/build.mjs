import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const isWindows = process.platform === "win32";
const nextBin = path.join(
  projectRoot,
  "node_modules",
  ".bin",
  isWindows ? "next.cmd" : "next",
);

const isVercelBuild =
  process.env.VERCEL === "1" ||
  process.env.NOW_BUILDER === "1" ||
  process.env.VERCEL_ENV !== undefined;

const command = isVercelBuild
  ? { file: nextBin, args: ["build"], shell: isWindows }
  : { file: process.execPath, args: [path.join(projectRoot, "scripts", "build-verified.mjs")], shell: false };

const result = spawnSync(command.file, command.args, {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
  shell: command.shell,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
