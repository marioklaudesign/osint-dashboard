import { NextResponse } from 'next/server';

// Forces the route to be treated as a dynamic backend runtime
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { query, keywords, sources } = await request.json();
    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCeGggK0d1Uqjh3GktkB7T37B4nPPa8Z0Q";

    if (!apiKey) {
      return NextResponse.json({ error: "Server API Configuration Missing." }, { status: 500 });
    }

    const systemPrompt = `You are an expert open-source intelligence co-pilot built directly into the user's workspace. 
    The user has access to these target keywords: ${JSON.stringify(keywords)}. 
    The user tracks these regional feeds: ${JSON.stringify(sources)}. 
    Answer the user's tactical question cleanly, utilizing the dataset when relevant. Keep analysis short and technical.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }]
        }]
      })
    });

    const data = await response.json();
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      return NextResponse.json({ response: aiResponse });
    } else {
      return NextResponse.json({ error: "Unexpected API response format structure." }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Gateway Routing Error." }, { status: 500 });
  }
}
