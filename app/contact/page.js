"use client";
import { useState } from "react";

export default function contactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center tracking-wide">
          CONTACT PAGE
        </h1>

        <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-sm">
          This is the contact page of our first Next.js app. Feel free to send a simple message here.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSent(false);
              }}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows="3"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSent(false);
              }}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p className="mt-4 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            Message sent! Thanks for reaching out.
          </p>
        )}
      </div>
    </div>
  );
}