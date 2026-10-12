// Runs `vitepress build` with a fixed argument list, ignoring anything pnpm
// appends to this script's own invocation (e.g. node-lint-test.yml's
// `pnpm build --if-present` — pnpm forwards `--if-present` onto whatever
// "build" resolves to, which `vitepress build` would otherwise misread as
// its root directory argument).
import { spawnSync } from 'node:child_process'

const result = spawnSync('vitepress', ['build'], { stdio: 'inherit', shell: true })
process.exit(result.status ?? 1)
