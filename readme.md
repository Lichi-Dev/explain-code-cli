# Explain Code CLI

A CLI implementation to get explaination of a code.

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
