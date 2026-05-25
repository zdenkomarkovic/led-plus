"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error ?? "Greška pri slanju.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Greška pri slanju. Proverite internet konekciju.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Poruka poslata!</h3>
        <p className="text-white/60 mb-6">Javićemo vam se u najkraćem roku.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-white text-sm font-semibold transition-colors"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">
            Ime i prezime <span className="text-accent">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Vaše ime"
            className="w-full bg-white/[0.07] border border-white/15 hover:border-white/25 focus:border-accent focus:outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/30 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="vas@email.com"
            className="w-full bg-white/[0.07] border border-white/15 hover:border-white/25 focus:border-accent focus:outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/30 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">
          Telefon
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="+381 6X XXX XXXX"
          className="w-full bg-white/[0.07] border border-white/15 hover:border-white/25 focus:border-accent focus:outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/30 transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1.5">
          Poruka <span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Napišite vašu poruku, upit ili narudžbinu..."
          className="w-full bg-white/[0.07] border border-white/15 hover:border-white/25 focus:border-accent focus:outline-none rounded-lg px-4 py-3 text-white placeholder:text-white/30 transition-colors text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/>
              <path d="M21 12a9 9 0 00-9-9" strokeLinecap="round"/>
            </svg>
            SLANJE...
          </>
        ) : (
          <>
            POŠALJI PORUKU
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
