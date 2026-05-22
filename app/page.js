'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const [search, setSearch] = useState('Protest');
  const [time, setTime] = useState(null);
  const [chat, setChat] = useState([{ sender: 'bot', text: 'Terminal assistant initialized via full-stack gateway. Ready.' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const keywords = [
    { en: "Protest", ml: "Protes", id: "Unjuk rasa", tl: "Protesta", kr: "시위", zh: "抗议", jp: "抗議" },
    { en: "Riot", ml: "Rusuhan", id: "Kerusuhan", tl: "Kaguluhan", kr: "폭동", zh: "暴乱", jp: "暴動" },
    { en: "Clash", ml: "Pertembungan", id: "Bentrokan", tl: "Sagupaan", kr: "충돌", zh: "冲突", jp: "衝突" },
    { en: "Standoff", ml: "Sekatan", id: "Barikade", tl: "Barikada", kr: "대치", zh: "对峙", jp: "対峙" },
    { en: "Barricade", ml: "Barikade", id: "Barikade", tl: "Barikada", kr: "바리케이드", zh: "路障", jp: "封鎖" },
    { en: "Demonstration", ml: "Demonstrasi", id: "Demonstrasi", tl: "Demonstrasyon", kr: "데모", zh: "游行", jp: "デモ" },
    { en: "Shooter", ml: "Penembak", id: "Penembak", tl: "Bumaril", kr: "총격범", zh: "枪手", jp: "銃撃" },
    { en: "Explosion", ml: "Letupan", id: "Ledakan", tl: "Pagsabog", kr: "폭발", zh: "爆炸", jp: "爆発" },
    { en: "Lockdown", ml: "Perintah berkurung", id: "Penguncian", tl: "Lockdown", kr: "봉쇄", zh: "封锁", jp: "封鎖" },
    { en: "Evacuation", ml: "Pemindahan", id: "Evakuasi", tl: "Paglikas", kr: "대피", zh: "疏散", jp: "避難" },
    { en: "Blast", ml: "Letusan", id: "Ledakan", tl: "Sabog", kr: "폭파", zh: "炸弹", jp: "爆破" }
  ];

  const sources = [
    { region: "Global", name: "USGS Earthquake Tracker", type: "Seismic Map", url: "https://earthquake.usgs.gov/earthquakes/map/" },
    { region: "Global", name: "NASA FIRMS", type: "Thermal Satellite", url: "https://firms.modaps.eosdis.nasa.gov/map/" },
    { region: "Global", name: "Liveuamap World", type: "Geopolitical Incidents", url: "https://liveuamap.com/" },
    { region: "Japan", name: "JMA Agency", type: "Meteorological Warnings", url: "https://www.jma.go.jp/" }
  ];

  const languages = [
    { code: 'en', label: 'ENGLISH', base: 'https://www.google.com/search?tbm=nws&q=' },
    { code: 'ml', label: 'MALAY', base: 'https://www.facebook.com/search/top/?q=' },
    { code: 'id', label: 'INDONESIAN', base: 'https://www.facebook.com/search/top/?q=' },
    { code: 'tl', label: 'TAGALOG', base: 'https://www.facebook.com/search/top/?q=' },
    { code: 'kr', label: 'KOREAN', base: 'https://twitter.com/search?q=' },
    { code: 'zh', label: 'CHINESE', base: 'https://s.weibo.com/weibo/' },
    { code: 'jp', label: 'JAPANESE', base: 'https://twitter.com/search?q=' }
  ];

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClock = (offset) => {
    if (!time) return "LOADING...";
    return new Date(time.getTime() + (time.getTimezoneOffset() * 60000) + (offset * 3600000)).toLocaleTimeString();
  };

  const getTranslation = (langKey) => {
    const entry = keywords.find(k => k.en === search);
    return entry ? entry[langKey] : search;
  };

  const handleSend = async (e) => {
    // Prevent default form behavior if triggered from keyboard events
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userQuery = input.trim();
    setChat(prev => [...prev, { sender: 'user', text: userQuery }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userQuery, keywords, sources })
      });
      
      const data = await res.json();
      
      // Look for the specific message response string mapping
      const cleanResponse = data.response || data.error || "Execution fault returned from system engine.";
      setChat(prev => [...prev, { sender: 'bot', text: cleanResponse }]);
    } catch (error) {
      setChat(prev => [...prev, { sender: 'bot', text: "Failed to establish validation link to fullstack gateway." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#00ff00', minHeight: '100vh', padding: '2rem', fontFamily: 'monospace', display: 'flex', flexDirection: 'column' }}>
      <header style={{ borderBottom: '1px solid #2a2a2a', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ color: '#d4af37', fontSize: '1.75rem', margin: 0 }}>⚜️ OSINT NEXUS TERMINAL v2.0</h1>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', color: '#00ffff' }}>
          <span>PEK (UTC+8): {formatClock(8)}</span>
          <span>TYO (UTC+9): {formatClock(9)}</span>
          <span>SYD (UTC+10): {formatClock(10)}</span>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '300px' }}>
          {/* SEARCH SELECTION */}
          <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #2a2a2a' }}>
            <h2 style={{ color: '#d4af37', marginTop: 0 }}>{" >> "} TACTICAL RECON</h2>
            <select style={{ backgroundColor: '#000', color: '#d4af37', border: '1px solid #d4af37', padding: '0.5rem', width: '100%', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 'bold' }} onChange={(e) => setSearch(e.target.value)} value={search}>
              {keywords.map(k => <option key={k.en} value={k.en}>{k.en}</option>)}
            </select>
            <div>
              {languages.map(lang => {
                const translatedVal = getTranslation(lang.code);
                return (
                  <div key={lang.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a2a2a', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#fff' }}><strong style={{ color: '#888' }}>{lang.label}:</strong> {translatedVal}</span>
                    <a href={lang.base + encodeURIComponent(translatedVal)} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline', fontSize: '0.85rem' }}>DEPLOY ↗</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI TERMINAL GATEWAY */}
        <div style={{ width: '360px', backgroundColor: '#111', border: '1px solid #d4af37', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          <div style={{ color: '#d4af37', borderBottom: '1px solid #2a2a2a', paddingBottom: '0.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>🤖 INTEL CO-PILOT CORE</div>
          <div style={{ flex: 1, overflowY: 'auto', minHeight: '300px', maxHeight: '400px', border: '1px solid #222', padding: '0.5rem', backgroundColor: '#000', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {chat.map((msg, i) => (
              <div key={i} style={{ padding: '0.4rem', borderRadius: '4px', maxWidth: '85%', alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', backgroundColor: msg.sender === 'user' ? '#002222' : '#112211', color: msg.sender === 'user' ? '#00ffff' : '#00ff00', fontSize: '0.85rem' }}>
                {msg.text}
              </div>
            ))}
            {loading && <div style={{ color: '#d4af37', fontSize: '0.85rem' }}>Processing backend vectors...</div>}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSend(e)} 
              placeholder="Ask command center..." 
              style={{ flex: 1, backgroundColor: '#000', color: '#00ff00', border: '1px solid #d4af37', padding: '0.5rem', fontFamily: 'monospace' }} 
            />
            <button onClick={(e) => handleSend(e)} style={{ backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '0.5rem 1rem', fontFamily: 'monospace', fontWeight: 'bold', cursor: 'pointer' }}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
