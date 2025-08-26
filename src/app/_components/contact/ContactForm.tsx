import { useState } from "react";

const INITIAL_FORM_DATA = {name: "", email: "", message: ""}

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  // const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [isSent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true)
      setSent(false)
      setErrorMessage(null)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      setFormData(INITIAL_FORM_DATA)
      setSent(true)
    } catch (err) {
      const errorText = err instanceof Error ? err.message : "Encountered an error!"
      setErrorMessage(errorText);
    } finally {
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-[calc(100dvh-200px)]  bg-radial-[50%_20%] from-primary to-accent w-full rounded-2xl p-5 space-y-5 flex flex-col items-center">
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
        disabled={isLoading}
        className=" bg-text text-back px-8 py-2 rounded shadow-lg"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>

      {isSent && <p className="text-green-600">Message sent!</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </form>
  );
}
