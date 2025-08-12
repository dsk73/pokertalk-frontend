import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const response = await fetch('http://localhost:8055/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()
  if (!response.ok) return NextResponse.json({ error: data }, { status: 401 })

  // Store access token in cookie/localStorage (or session)
  return NextResponse.json({ access_token: data.data.access_token, user: data.data.user })
}
