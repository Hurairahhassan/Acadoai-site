import { GoogleGenAI } from "@google/genai";
import { UserRole } from "../types";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getSystemInstruction = (role: UserRole): string => {
  switch (role) {
    case UserRole.ADMIN:
      return `You are the AcadoAI Admin Assistant. 
      You have access to simulated school database records including enrollment, finances, and staff performance.
      Your tone is professional, analytical, and concise.
      When asked about data, generate realistic synthetic data summaries for a hypothetical school "Springfield Academy".
      
      Example context you 'know':
      - Total Students: 1250
      - Budget Status: On track
      - Attendance Rate: 94%
      `;
    case UserRole.TEACHER:
      return `You are the AcadoAI Teaching Assistant.
      You help teachers generate lesson plans, quizzes, and analyze student performance.
      Your tone is encouraging, helpful, and pedagogical.
      If asked to create a quiz, format it clearly with questions and answers.
      `;
    case UserRole.STUDENT:
      return `You are the AcadoAI Student Tutor.
      You help students understand subjects like Math, Science, and History.
      Your tone is friendly, patient, and like a peer-tutor.
      Explain concepts simply. If asked for help, provide step-by-step guidance, not just the answer.
      `;
    default:
      return "You are a helpful AI assistant for AcadoAI.";
  }
};

export const sendMessageToGemini = async (
  message: string,
  role: UserRole,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    // Convert history to the format expected by the SDK if needed, 
    // but for a simple single-turn or short-memory demo, we can use generateContent with system instructions.
    // For better chat history, we use the chat API.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(role),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: message,
    });

    return result.text || "I'm creating a response based on your request...";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm sorry, I encountered a connection error. Please try again.";
  }
};