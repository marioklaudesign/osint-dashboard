'use client';
import { useState, useEffect } from 'react';
import { keywords, sources } from './data';

export default function OSINTDashboard() {
  const [search, setSearch] = useState('Protest');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTranslation = (langKey) => {
    const entry = keywords.find(k => k.en === search);
    return entry ? entry[langKey] : search;
  };

  return (
    <div className="bg-black text-green-500 min-h-screen p-8 font-mono">
      <header className="border-b border-green-900 pb-4 mb-8">
        <h1 className="text-3xl font-bold">⚜️ OSINT NEXUS TERMINAL v1.0</h1>
        <div className="flex gap-6 mt-2 text-cyan-400">
          <span>TYO: {new Date(time.getTime() + 9*3600000).toLocaleTimeString()}</span>
          <span>PEK: {new Date(time.getTime() + 8*3600000).toLocaleTimeString()}</span>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* TACTICAL SEARCH */}
        <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-xl mb-4 text-yellow-500">>> TACTICAL RECON</h2>
          <select 
            className="bg-black border border-green-500 p-2 w-full mb-6"
            onChange={(e) => setSearch(e.target.value)}
          >
            {keywords.map(k => <option key={k.en} value={k.en}>{k.en}</option>)}
          </select>

          <div className="space-y-4">
            {['zh', 'jp', 'kr', 'id'].map(lang => (
              <div key={lang} className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span>{lang.toUpperCase()}: {getTranslation(lang)}</span>
                <a 
                  href={`https://www.google.com/search?q=${getTranslation(lang)}`}
                  target="_blank" 
                  className="text-cyan-500 hover:underline text-sm"
                >
                  LAUNCH SEARCH ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* STRATEGIC SOURCES */}
        <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-xl mb-4 text-yellow-500">>> STRATEGIC NODES (60+)</h2>
          <div className="h-96 overflow-y-auto space-y-2">
            {sources.map((s, i) => (
              <a key={i} href={s.url} target="_blank" className="block p-2 hover:bg-zinc-800 text-sm">
                <span className="text-zinc-500 mr-2">[{s.region}]</span> {s.name}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}