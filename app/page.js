'use client';
import { useState, useEffect } from 'react';
import { keywords, sources } from './data';

export default function OSINTDashboard() {
  const [search, setSearch] = useState('Protest');
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTranslation = (langKey) => {
    const entry = keywords.find(k => k.en === search);
    return entry ? entry[langKey] : search;
  };

  const formatClock = (offset) => {
    if (!time) return "LOADING...";
    return new Date(time.getTime() + offset * 3600000).toLocaleTimeString();
  };

  return (
    <div className="bg-black text-green-500 min-h-screen p-8 font-mono" style={{ backgroundColor: '#0d0d0d', color: '#00ff00', minHeight: '100vh', padding: '2rem', fontFamily: 'monospace' }}>
      <header className="border-b border-green-900 pb-4 mb-8" style={{ borderBottom: '1px solid #1f2937', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 className="text-3xl font-bold" style={{ color: '#d4af37', fontSize: '1.75rem', margin: 0 }}>⚜️ OSINT NEXUS TERMINAL v1.1</h1>
        <div className="flex gap-6 mt-2 text-cyan-400" style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', color: '#00ffff' }}>
          <span>PEK (UTC+8): {formatClock(8)}</span>
          <span>TYO (UTC+9): {formatClock(9)}</span>
          <span>SEL (UTC+9): {formatClock(9)}</span>
          <span>SYD (UTC+10): {formatClock(10)}</span>
        </div>
      </header>

      {/* LIVE PULSE STRIP */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ff0000', borderRadius: '4px' }}>
        <h2 style={{ color: '#ff0000', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>● LIVE RECON WIRE FEEDS (AGGREGATORS)</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="https://www.gdacs.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3333', textDecoration: 'underline' }}>GLOBAL CRISIS PULSE (GDACS)</a>
          <a href="https://www.tsunami.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3333', textDecoration: 'underline' }}>PACIFIC TSUNAMI ALERTS</a>
          <a href="https://liveuamap.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff3333', textDecoration: 'underline' }}>LIVE CONFLICT MONITOR</a>
        </div>
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* TACTICAL SEARCH */}
        <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800" style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #2a2a2a' }}>
          <h2 className="text-xl mb-4 text-yellow-500" style={{ color: '#d4af37', marginTop: 0 }}>>> TACTICAL RECON</h2>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>SELECT ENGINE TARGET KEYWORD:</label>
          <select 
            className="bg-black border border-green-500 p-2 w-full mb-6"
            style={{ backgroundColor: '#000', color: '#d4af37', border: '1px solid #d4af37', padding: '0.5rem', width: '100%', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 'bold' }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          >
            {keywords.map(k => <option key={k.en} value={k.en}>{k.en}</option>)}
          </select>

          <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { code: 'en', label: 'ENGLISH' },
              { code: 'ml', label: 'MALAY' },
              { code: 'id', label: 'INDONESIAN' },
              { code: 'tl', label: 'TAGALOG' },
              { code: 'kr', label: 'KOREAN' },
              { code: 'zh', label: 'CHINESE' },
              { code: 'jp', label: 'JAPANESE' }
            ].map(lang => {
              const translatedVal = getTranslation(lang.code);
              const searchUrls = {
                en: `https://www.google.com/search?tbm=nws&q=${translatedVal}`,
                ml: `https://www.facebook.com/search/top/?q=${translatedVal}`,
                id: `https://www.facebook.com/search/top/?q=${translatedVal}`,
                tl: `https://www.facebook.com/search/top/?q=${translatedVal}`,
                kr: `https://twitter.com/search?q=${translatedVal}`,
                zh: `https://s.weibo.com/weibo/${translatedVal}`,
                jp: `https://twitter.com/search?q=${translatedVal}`
              };
              return (
                <div key={lang.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a2a2a', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#fff' }}><strong style={{ color: '#888' }}>{lang.label}:</strong> {translatedVal}</span>
                  <a 
                    href={searchUrls[lang.code]}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#00ffff', textDecoration: 'underline', fontSize: '0.85rem' }}
                  >
                    DEPLOY SEARCH ↗
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* STRATEGIC SOURCES */}
        <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800" style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #2a2a2a' }}>
          <h2 className="text-xl mb-4 text-yellow-500" style={{ color: '#d4af37', marginTop: 0 }}>>> STRATEGIC INTEL NODES (60+)</h2>
          <div className="h-96 overflow-y-auto space-y-2" style={{ height: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sources.map((s, i) => (
              <a 
                key={i} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'block', padding: '0.5rem', textDecoration: 'none', color: '#00ffff', borderBottom: '1px solid #222' }}
              >
                <span style={{ color: '#888', marginRight: '0.5rem', fontSize: '0.85rem' }}>[{s.region}]</span> 
                <span style={{ color: '#fff' }}>{s.name}</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginTop: '0.15rem' }}>// {s.type}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
