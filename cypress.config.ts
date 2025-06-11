import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com/",
    specPattern: "e2e/**/*.spec.ts",
    supportFile: "support/e2e.ts", // אין תיקיית cypress אז מצביע ישירות
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
