import Layout from '../../components/Layout';

export default function MyServers() {
  // Nanti data ini ditarik dari Backend Express lo
  const servers = [
    { id: '1', name: 'Survival Server', ip: '103.15.xx.xx', status: 'online', ram: '2GB / 4GB', cpu: '45%', exp: '25 Hari' },
    { id: '2', name: 'Skyblock Project', ip: '103.15.xx.xx', status: 'online', ram: '1GB / 2GB', cpu: '10%', exp: '12 Hari' },
    { id: '3', name: 'Dev VPS', ip: '45.12.xx.xx', status: 'offline', ram: '0GB / 4GB', cpu: '0%', exp: 'Expired' },
  ];

  return (
    <Layout>
      <div className="p-6">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter">My Servers</h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Manage your instances</p>
          </div>
          <button className="bg-kh-blue/10 border border-kh-blue/20 text-kh-blue px-4 py-2 rounded-2xl text-xs font-bold hover:bg-kh-blue/20 transition-all">
            + Claim Server
          </button>
        </div>

        {/* Grid Server List */}
        <div className="grid gap-4">
          {servers.map((server) => (
            <div key={server.id} className="group relative bg-kh-card backdrop-blur-xl border border-white/5 rounded-[32px] p-5 hover:border-kh-blue/30 transition-all duration-500 overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-kh-blue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-black/40 rounded-[24px] flex items-center justify-center border border-white/5 shadow-inner">
                    <img src="/assets/server-iso.png" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" alt="Server" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg italic leading-tight">{server.name}</h3>
                    <p className="text-gray-500 text-[10px] font-mono mt-1 tracking-wider">{server.ip}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[9px] bg-white/5 text-gray-400 px-2 py-0.5 rounded font-bold uppercase">{server.ram}</span>
                      <span className="text-[9px] bg-white/5 text-gray-400 px-2 py-0.5 rounded font-bold uppercase">CPU: {server.cpu}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                    server.status === 'online' ? 'bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {server.status}
                  </span>
                  <p className={`text-[10px] mt-3 font-bold uppercase ${server.exp === 'Expired' ? 'text-red-500' : 'text-kh-blue'}`}>
                    {server.exp}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3 relative z-10">
                <button className="bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase py-3 rounded-2xl transition-all border border-white/5">
                  Console
                </button>
                <button className="bg-kh-blue hover:bg-blue-600 text-white text-[10px] font-black uppercase py-3 rounded-2xl shadow-neon-blue transition-all active:scale-95">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
