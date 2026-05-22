import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request) {
  // Hardcoding your active key explicitly to bypass Vercel env cache issues
  const apiKey = "AIzaSyC9xwUBNiPS5P4ukztLCnL-OHoh16aXLoU"; 

  try {
    const body = await request.json();
    const userQuery = body.query || "Hello";

    // Direct fetch endpoint using standard stable routing
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: userQuery }]
        }]
      })
    });

    const data = await response.json();

    // Check if Google directly complains about the model structure
    if (data.error) {
      return NextResponse.json({ 
        response: `Google API Return Exception: ${data.error.message} (${data.error.status})` 
      });
    }

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json({ response: data.candidates[0].content.parts[0].text });
    }

    return NextResponse.json({ response: "Terminal error: Received empty vector mapping from core." });

  } catch (error) {
    return NextResponse.json({ response: `Nexus Gateway Error: ${error.message}` });
  }
}
