#!/usr/bin/env node

const axios = require("axios");
const { program } = require("commander");
const chalk = require("chalk");
const fs = require("fs").promises;
const boxen = require("boxen");
const explainPara = chalk.hex("#FFA500");
const heading = chalk.hex("#4AF626");
const errorColor = chalk.hex("#ff3333");
require("dotenv").config();
const OPEN_AI_API_KEY = "YOUR_API_KEY";
program
  .version("1.0.0")
  .description("CLI App to explain code using OpenAI API")
  .option("--file <fileName>", "Explain the code from the file")
  .name("explain")
  .usage("--file <fileName>")
  .action(async (options) => {
    try {
      const codeFilePath = options.file || "index.js";
      const code = await fs.readFile(codeFilePath, "utf-8");
      const explanation = await getCodeExplanation(code);
      console.log(heading("Explanation"));
      console.log(explainPara(boxen(explanation, { padding: 1 })));
    } catch (error) {
      console.error(
        errorColor("Error reading or explaining the code:", error.message)
      );
    }
  });

program.parse(process.argv);

async function getCodeExplanation(code) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `Explain the following code in points:\n${code}`,
        model: "gpt-3.5-turbo-instruct",
        max_tokens: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPEN_AI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get code explanation from OpenAI API");
  }
}
