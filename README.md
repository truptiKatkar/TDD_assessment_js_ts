# String Calculator Project

This project is a simple implementation of a String Calculator in TypeScript, following Test-Driven Development (TDD) principles. The calculator can parse a string of numbers, separated by various delimiters, and return their sum. It supports custom delimiters and throws an exception for negative numbers.

## Features

- Handles an empty string and returns 0.
- Returns the sum of a single number or multiple comma-separated numbers.
- Supports new lines as delimiters between numbers.
- Allows custom delimiters specified at the beginning of the string.
- Throws an exception for negative numbers, showing all negative numbers in the error message.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/truptiKatkar/TDD_assessment_js_ts.git
   cd string-calculator-project
	npm install
	npm test