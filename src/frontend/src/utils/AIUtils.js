import { GoogleGenerativeAI } from "@google/generative-ai";
import  { promptDescription } from "./constant.js";
// const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
const geminiApiKey = "Your_Gemini_Api_Key"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const AnalyzeDoc = async (imageParts) => {
  try{
  
    const result = await model.generateContent([promptDescription, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    return text;

  }catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
}


const processTreatmentPlan1 = async (analysisResult) => {

  const prompt = `Your role and goal is to be an that will be using this treatment plan ${analysisResult} to create Columns:
              - Todo: Tasks that need to be started
              - Doing: Tasks that are in progress
              - Done: Tasks that are completed
        
              Each task should include a brief description. The tasks should be categorized appropriately based on the stage of the treatment process.
        
              Please provide the results in the following  format for easy front-end display no quotating or what so ever just pure the structure below:

              {
                "columns": [
                  { "id": "todo", "title": "Todo" },
                  { "id": "doing", "title": "Work in progress" },
                  { "id": "done", "title": "Done" }
                ],
                "tasks": [
                  { "id": "1", "columnId": "todo", "content": "Example task 1" },
                  { "id": "2", "columnId": "todo", "content": "Example task 2" },
                  { "id": "3", "columnId": "doing", "content": "Example task 3" },
                  { "id": "4", "columnId": "doing", "content": "Example task 4" },
                  { "id": "5", "columnId": "done", "content": "Example task 5" }
                ]
              }
                          
              `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const parsedResponse = JSON.parse(text);
  return parsedResponse;
};


export { AnalyzeDoc, processTreatmentPlan1 };