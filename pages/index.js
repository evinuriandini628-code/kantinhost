import React, { useState } from 'react';
import Head from 'next/head';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi loading sebelum pindah ke backend nanti
    setTimeout(() => {
      console.log("OTP dikirim ke:", phone);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-kh-dark flex items-center justify-center p-6 selection:bg-kh-blue/30 relative overflow-hidden">
      <Head>
        <title>Login | KantinHost by KantinDigital</title>
      </Head>

      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-kh-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-kh-blue/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="w-full max-w-[400px] relative z-10">
        {/* Maskot Welcome (Wolf Welcome) */}
        <div className="flex justify-center mb-[-50px] relative z-20">
          <img 
            src="/assets/wolf-welcome.png" 
            className="w-52 h-52 object-contain drop-shadow-[0_0_25px_rgba(0,163,255,0.4)] transition-transform hover:scale-105 duration-500" 
            alt="Welcome Wolf" 
          />
        </div>

        {/* Card Utama (Glassmorphism) */}
        <div className="bg-kh-card backdrop-blur-3xl border border-white/10 rounded-[45px] p-10 pt-16 shadow-2xl shadow-black/50">
          
          {/* Logo & Judul Area */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <img 
                src="/assets/logo-kh.png" 
                className="h-12 object-contain drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" 
                alt="KantinHost Logo" 
              />
            </div>
            
            <h1 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">
              KantinHost
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="h-[1px] w-5 bg-kh-blue/40" />
              <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em]">Client Area</p>
              <span className="h-[1px] w-5 bg-kh-blue/40" />
            </div>
          </div>

          {/* Form Login */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 px-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                WhatsApp Number
              </label>
              <div className="relative group">
                {/* Prefix Indonesia */}
                <div className="absolute inset-y-0 left-5 flex items-center text-kh-blue font-black text-sm transition-colors group-focus-within:text-white">
                  +62
                </div>
                <input 
                  type="number" 
                  required
                  placeholder="812xxxxxxx" 
                  className="w-full bg-black/50 border border-white/5 rounded-[22px] py-4.5 pl-16 pr-5 text-white font-bold focus:outline-none focus:border-kh-blue/40 focus:ring-1 focus:ring-kh-blue/20 transition-all placeholder:text-gray-800 text-sm"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-kh-blue hover:bg-blue-600 disabled:bg-gray-800 disabled:text-gray-500 text-white font-black py-4.5 rounded-[22px] shadow-[0_8px_25px_-5px_rgba(0,163,255,0.4)] transition-all active:scale-95 uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Dapatkan Akses OTP"
              )}
            </button>
          </form>

          {/* Footer Branding */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img src="/assets/logo.png" className="h-3.5 mb-2.5" alt="KantinDigital" />
            <p className="text-[8px] text-gray-400 font-bold tracking-[0.25em] uppercase text-center leading-relaxed">
              Powered by MatPay Dashboard<br/>Baileys Library Connection
            </p>
          </div>
        </div>

        {/* Info Tambahan di bawah Card */}
        <p className="text-center mt-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          &copy; 2026 KantinDigital Ecosystem
        </p>
      </div>
    </div>
  );
}
