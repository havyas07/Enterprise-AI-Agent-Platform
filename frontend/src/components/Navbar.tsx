export default function Navbar() {
    return (
      <nav className="w-full bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Enterprise AI Agent Platform
          </h1>
  
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition">
            Login
          </button>
        </div>
      </nav>
    );
  }