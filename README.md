# Home Assignment – Cypress & Allure

This repository contains three tasks implemented using Cypress and Allure, each focused on different testing skills and scenarios:

**Task 1: Define five critical test titles for the Amazon site and write a full test case for one scenario (saved in Task1.spec.ts).**

**Task 2: Validate Amazon’s main menu and Customer Service flow using Cypress and Allure.**

**Task 3: Shopping-cart suite with beforeEach/afterEach hooks, free-shipping eligibility checks, and cart cleanup.**

---

## Prerequisites

- **Node.js** ≥ 16  
- **npm** ≥ 8  
- **Allure CLI** (our project pins to version 2.34.0). You can install it globally or as a dev-dependency:

  # Global install
  npm install -g allure-commandline@^2.34.0




**Allure Reporting**

Results are collected automatically into allure-results/ when tests run.

**Generate the report:**
npx allure generate allure-results --clean -o allure-report

**Open the report:**
npx allure open allure-report






**CI Integration**

**A GitHub Actions workflow is configured in .github/workflows/cypress.yml. On every push or pull-request to main, it:**

Checks out the code

Installs Node/npm dependencies

Runs Cypress headless

Generates the Allure report

Uploads allure-report/ as an artifact
