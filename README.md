# Get Content Logger

## Overview

The **Get Content Logger** package is a powerful tool designed to simplify working with **large language models (LLM)** and **text-based artificial intelligence models**. It enables users to print all codes and components within their projects, making it effortless to integrate with language models and other AI technologies.

## Installation

You can easily install the package using npm or yarn:

```bash
npm install get-content-logger
# or
yarn add get-content-logger
```
## Usage

### CommonJS (.cjs) Usage

If your project uses CommonJS modules (e.g., Node.js prior to version 13.2), you can import and use the package as follows:

```javascript
const getContentLogger = require('get-content-logger');

// Define the folder path and log file path
const folderPath = './'; 
const logFilePath = './now-common.txt';

// Use the package to get content and log it to a file
getContentLogger.getContentEvery(folderPath, logFilePath);
```
### ES Modules (.mjs) Usage

If your project uses ES modules (e.g., Node.js with "type": "module" in package.json), you can import and use the package as follows:


```javascript
import * as getContentLogger from 'get-content-logger';

// Define the folder path and log file path
const folderPath = './'; 
const logFilePath = './now-module.txt';

// Use the package to get content and log it to a file
await getContentLogger.getContentEvery(folderPath, logFilePath);
```
### Snapshot Logging

This package provides three main functions for logging directory and file contents:

- **getContent(folderPath, logFilePath):**
Log the contents of the specified folder and its subfolders recursively.

- **getContentWithSnapshot(folderPath, logFilePath, snapshot):**
Log the contents of the specified folder and its subfolders, adding a snapshot identifier for differentiation.

- **getContentEvery(folderPath, logFilePath):**
Log the contents of the specified folder and its subfolders, overwriting the log file with each call.

### Important Notes
- Ensure that your Node.js version and package.json configuration (e.g., "type": "module" for ES modules) align with your preferred module system.

- The package uses the fs/promises module for file system operations, which is available in Node.js 14.0.0 and later.

- Make sure to replace ./ and logFilePath with the appropriate folder path and log file path for your use case.

### License 
This package is licensed under the MIT License. You are free to use it in your projects, subject to the terms and conditions of the MIT License.
