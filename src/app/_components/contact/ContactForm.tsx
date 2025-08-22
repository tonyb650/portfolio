import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-[calc(100dvh-200px)]  bg-[#438496] w-full rounded-2xl p-5 space-y-5 flex flex-col items-center">
      {/* Honeypot hidden field */}
      <input type="text" name="company" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-3/4 p-2 bg-white rounded shadow-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-3/4 p-2 bg-white rounded shadow-md"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-3/4 p-2 bg-white rounded shadow-md"
        rows={20}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className=" bg-[#0B3C5d] text-white px-8 py-2 rounded shadow-lg"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p className="text-green-600">Message sent!</p>}
      {status === "error" && <p className="text-red-600">Something went wrong. Try again.</p>}
    </form>
  );
}
