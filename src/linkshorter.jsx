import React, { useState } from "react";

export default function NeonShortener() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return alert("Please enter a URL first!");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.shortUrl) setShort(data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md border border-white/10">
        
        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
              URL Shortener
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Transform your long and messy links into short, shareable ones instantly. 
              Copy them with one click and track them later.
            </p>
          </div>
          <div className="mt-8 text-sm text-white/70">
            <p>⚡ Fast • 🔒 Secure</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white/10 p-10 flex flex-col justify-center">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Paste your link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-pink-500 transition"
            />
          </div>

          <button
            onClick={handleShorten}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold tracking-wide shadow-lg transition"
          >
            {loading ? "⏳ Processing..." : "✨ Shorten Link"}
          </button>

          {short && (
            <div className="mt-8 bg-white/20 rounded-xl p-6 text-center border border-white/20">
              <p className="mb-3 text-lg font-semibold text-white">
                🎉 Shortened Link Ready!
              </p>
              <a
                href={short}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-pink-300 underline hover:text-pink-200 break-words"
              >
                {short}
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(short)}
                className="mt-4 w-full py-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold transition"
              >
                📋 Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
