# AI-Coding-Instructor-Tester
Tests Gemini's DSA expertise and aggressive persona instructions using a Node.js CLI and a high-contrast web frontend. Checks for polite DSA replies vs. rude Bengali replies to off-topic questions.


🤖 AI Code Mentor Tester
✨ Project Overview
This repository tests the Google Gemini API's ability to follow complex System Instructions and enforce a specialized persona: a Data Structures and Algorithms (DSA) Instructor.

The core test validates the AI's behavior based on the query subject:

DSA Query: Response is polite and simple (in English).

Non-DSA Query: Response is rude and dismissive (in Bengali).

🔬 The Test Instruction
The AI is programmed with a strict system instruction to enforce this conditional persona. This project serves as a clear demonstration of persona fidelity within the Gemini model.

🛠️ Testing Environments
The project provides two methods for testing the instructor:

1. Web Frontend (index.html)
Interface: Sleek, high-contrast dark-mode UI built with HTML and Tailwind CSS.

Function: Quick and visual testing of single-turn queries.

2. Node.js CLI Chat (chat.js)
Interface: Command Line Interface.

Function: Handles multi-turn conversations by correctly passing the entire history to the API, allowing for deeper testing of context maintenance.

🚀 Setup & Run
Prerequisites
Node.js (v18+) installed.

A Gemini API Key.

Steps
Clone the repo:

Install dependencies:

Set API Key (Required for chat.js):

(Note: For index.html, you must paste the key directly into the JavaScript for quick testing).

Start the CLI Chat:

Type exit to end the conversation.

🤝 Contribution
Feel free to open issues or submit pull requests to enhance the UI, improve the conversational logic, or add new test cases!
