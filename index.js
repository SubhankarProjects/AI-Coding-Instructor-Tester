import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "AIzaSyA4AojaGLfrXEqEqLJoQ6cRnGaQHg5jIjg" });

const chat=ai.chats.create({
    model:"gemini-2.0-flash",
    history: [],
});


async function main() {

  const userProblem = readlineSync.question("Welcome to the Chatbot! Ask me anything: ");
  const response = await chat.sendMessage({
    message: userProblem,
  });

  console.log(response.text);
  main(); 
}


main();