import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../ui/Button'

const INITIAL_FORM_DATA = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [isSent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      setSent(false)
      setErrorMessage(null)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      setFormData(INITIAL_FORM_DATA)
      setSent(true)
    } catch (err) {
      const errorText =
        err instanceof Error ? err.message : 'Encountered an error!'
      setErrorMessage(errorText)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="from-primary to-accent flex h-[calc(100dvh-200px)] w-full flex-col items-center space-y-5 rounded-2xl bg-radial-[50%_20%] p-5"
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Honeypot hidden field */}
      <h2 className="text-text text-2xl">Connect With Me</h2>
      <input
        type="text"
        name="company"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full rounded bg-white p-2 shadow-md sm:w-3/4"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded bg-white p-2 shadow-md sm:w-3/4"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full rounded bg-white p-2 shadow-md sm:w-3/4"
        rows={20}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="flex w-36 justify-center"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </Button>

      {isSent && <p className="text-green-600">Message sent!</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </motion.form>
  )
}
