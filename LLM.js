import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: "AIzaSyA4AojaGLfrXEqEqLJoQ6cRnGaQHg5jIjg" });

const History=[]

async function Chatting(userProblem) {

  History.push({
    role: "user",
    parts: [{ text: userProblem }]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History
  });


  History.push({
    role: "model",
    parts: [{ text: response.text }]
  })

  console.log("\n");
  console.log(response.text);
}


async function main() {

  const userProblem = readlineSync.question("Welcome to the Chatbot! Ask me anything: ");
  await Chatting(userProblem);
  main(); 
}


main();