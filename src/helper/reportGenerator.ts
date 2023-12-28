const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-results/report/cucumber-multi/",
  reportPath: "./test-results/report/cucumber-multi/cucumber.json",
  metadata: {
    browser: {
      name: "edge",
      version: "120",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Playwright_JS Framework - Cucumber" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});