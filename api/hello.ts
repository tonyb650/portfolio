import type { VercelRequest, VercelResponse } from '@vercel/node'

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}