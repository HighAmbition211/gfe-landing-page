"use server"

export default async function checkAuthentication() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/api/auth/session`)

    if (!res.ok) return false

    const data = await res.json()

    if (data?.expires && new Date(data.expires) > new Date()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}
