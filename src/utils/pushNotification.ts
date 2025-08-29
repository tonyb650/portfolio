const PUSHOVER_URL = process.env.PUSHOVER_URL || ""

export default async function sendPush (message: string): Promise<number> {
  try {
    const payload = {
      user: process.env.PUSHOVER_USER,
      token: process.env.PUSHOVER_TOKEN,
      message
    }

    const response = await fetch(PUSHOVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    })

    const responseMessage = await response.json();
    return typeof responseMessage.status === "number" ? responseMessage.status :  -1
  } catch (error) {
    console.error('Error making post request to Pushover API:', error);
    return -1
  }
}