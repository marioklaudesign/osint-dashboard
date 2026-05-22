import { NextResponse } from 'next/server';

// This completely stops Vercel/Next.js from caching this file
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request) {
  // 1. Double check your API key is pasted exactly here inside the quotes:
  const apiKey = "YOUR_API_KEY_HERE"; 

  try {
    const body = await request.json();
    const userQuery = body.query || "Hello";

    // Standard stable endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Adding a timestamp parameter forces the network to completely ignore old caches
      next: { revalidate: 0 }, 
      body: JSON.stringify({
        contents: [{
          parts: [{ text: userQuery }]
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ response: `Google API Error: ${data.error.message} (${data.error.status})` });
    }

    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json({ response: data.candidates[0].content.parts[0].text });
    }

    return NextResponse.json({ response: "Empty payload returned." });

  } catch (error) {
    return NextResponse.json({ response: `Gateway Error: ${error.message}` });
  }
}
