import React, { useState } from "react";
import "./App.css";
import { generateQuote } from "./api";

function App() {
  const [keyword, setKeyword] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!keyword) {
      alert("Please enter a keyword");
      return;
    }
    setLoading(true);
    setQuote("");

    try {
      const result = await generateQuote(keyword);
      setCopied(false);
      setQuote(result);
    } catch (error) {
      console.error(error);
      alert("Error generating quote");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>AI Quote Generator</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a word (e.g. study, success)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {quote && (
          <div className="quote-box">
            <p>"{quote}"</p>
            <button
              className="copy-btn"
              onClick={() =>{ navigator.clipboard.writeText(quote);
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 1500);
              }}
            >
              {copied ? "✔ Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;