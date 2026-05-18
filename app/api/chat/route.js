import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  // 1. Paste your verified AI Studio key directly inside these quotes:
  const apiKey = "AIzaSyC9xwUBNiPS5P4ukztLCnL-OHoh16aXLoU";

  try {
    // Safely parse the body input
    const body = await request.json();
    const userQuery = body.query || "Hello";

    // Call Google's universally stable developer API endpoint
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: userQuery }]
        }]
      })
    });

    const data = await response.json();

    // If Google returns an explicit API error, catch it and pass it to the chat UI
    if (data.error) {
      return NextResponse.json({ response: `Google API Error: ${data.error.message} (${data.error.status})` });
    }

    // Parse out the clean text response string
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json({ response: data.candidates[0].content.parts[0].text });
    }

    return NextResponse.json({ response: "System connected, but received empty text payload vectors." });

  } catch (error) {
    return NextResponse.json({ response: `Internal Gateway Execution Error: ${error.message}` });
  }
}
