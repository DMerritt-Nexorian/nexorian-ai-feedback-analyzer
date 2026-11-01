"use client";

import { useChat } from "ai/react";

export default function Home() {
  const system = "You are Nexorian AI Feedback Analyzer. Analyze open-ended survey responses, customer feedback, and reviews. Extract themes, sentiment, and actionable insights with high integrity and precision.";

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { system },
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">Nexorian AI Feedback Analyzer</h1>
      <p className="mb-6 text-lg">Sentiment, themes, and insights from surveys and customer feedback.</p>

      <div className="border rounded p-4 h-96 overflow-y-auto mb-4 bg-white/70">
        {messages.length === 0 && <p className="text-gray-500">Paste survey responses or feedback...</p>}
        {messages.map((m) => (
          <div key={m.id} className="mb-3">
            <strong>{m.role === "user" ? "You" : "Nexorian"}:</strong>
            <div className="whitespace-pre-wrap mt-1">{m.content}</div>
          </div>
        ))}
        {isLoading && <div className="text-amber-700">Analyzing...</div>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Paste feedback or describe the analysis needed"
          className="flex-1 border p-3 rounded"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading} className="bg-amber-700 text-white px-6 py-3 rounded font-medium">
          Analyze
        </button>
      </form>
    </main>
  );
}