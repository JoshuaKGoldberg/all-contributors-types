import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/*.test.*"],
	unbundle: true,
});
