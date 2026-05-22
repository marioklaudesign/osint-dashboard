import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  // Paste your verified AI Studio key directly inside these quotes:
  const apiKey = "AIzaSyC9xwUBNiPS5P4ukztLCnL-OHoh16aXLoU";

  try {
    // Initialize the official Google SDK client
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Safely parse the incoming user query
    const body = await request.json();
    const userQuery = body.query || "Hello";

    // Call the model using official SDK methods
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
    });

    // Extract the text cleanly using the SDK built-in formatters
    if (response.text) {
      return NextResponse.json({ response: response.text });
    }

    return NextResponse.json({ response: "System connected, but text generation payload was empty." });

  } catch (error) {
    return NextResponse.json({ response: `Google SDK Connection Error: ${error.message}` });
  }
}
