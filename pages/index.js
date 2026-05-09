// client/pages/index.js
import React, { useState } from 'react';

export default function LoginPage() {
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-kh-dark flex items-center justify-center p-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,163,255,0.1),transparent_70%)]" />
      
      <div className="w-full max-w-sm bg-kh-card backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 relative z-10 shadow-2xl">
        {/* Maskot Welcome */}
        <div className="flex justify-center -mt-20 mb-6">
          <img src="/assets/wolf-welcome.png" className="w-44 h-44 drop-shadow-neon-blue" alt="Welcome" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">KantinHost</h2>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Client Area Access</p>
        </div>

        <div className="space-y-5">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center text-kh-blue font-bold">+62</div>
            <input 
              type="tel" 
              placeholder="812xxxxxxxx" 
              className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-4 text-white focus:outline-none focus:border-kh-blue/50 transition-all placeholder:text-gray-700 font-semibold"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="w-full bg-kh-blue hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-neon-blue transition-all active:scale-95 uppercase tracking-widest text-xs">
            Dapatkan Kode OTP
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
           <img src="/assets/logo.png" className="h-4 opacity-30 grayscale" alt="KantinDigital" />
           <p className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Automated by Baileys</p>
        </div>
      </div>
    </div>
  );
}
