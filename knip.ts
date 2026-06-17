import type { KnipConfig } from 'knip';

export default {
  ignoreFiles: ["src/demo/**/*.ts", "src/globals.d.ts"],
  project: ["src/**/*.ts"],
} satisfies KnipConfig;
