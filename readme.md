# Explain Code CLI

A CLI implementation to get explaination of a code.

## Demo

https://github.com/Lichi-Dev/explain-code-cli/assets/112729771/b9685418-0f2b-4d9c-8ed2-97ce798cf892

## Prerequisites

1. [Node.js](https://nodejs.org) and [npm](https://npmjs.com) installed.

## Installation

1. Clone or download this repository.
2. Create a openai API KEY [API KEY](https://platform.openai.com/api-keys). Copy or store this token in a secure place.
3. Create a variable named `OPEN_AI_API_KEY` in index.js, and set its value to your API KEY obtained in step 2.
4. Install the CLI: `npm install -g` (alternatively, you may invoke the CLI directly via `node index.js <commands>`)

## Usage

At any time, you can view usage instructions by entering `explain --help`.

### Explain the Code

First go to the directory where the file is located and execute the following command to explain the code:

`explain --file <fileName>`

## Summary

### Approach taken

- Created a new directory for the project and initialized it with npm init.
- Installed necessary packages (axios, commander, boxen, chalk and dotenv).
- Utilized the commander library to define a CLI app with a version , options and description.
- Created a getCodeExplanation function to get the explaination of the code from the Openai API using axios.
- Also used boxen and chalk for styling.

### Challenges faced

Had issues with seting up the Openai api, since I was getting rate limit error as my credits were expired. To tackle this problem I created a new openai account and used that account.
