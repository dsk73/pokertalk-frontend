// route.ts (Next.js 13/14 API route)
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password, phone_number } = await req.json()

  const response = await fetch('http://localhost:8055/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer <ADMIN_ACCESS_TOKEN>` // use env
    },
    body: JSON.stringify({
      email,
      password,
      phone_number,
      role: "<AUTHENTICATED_ROLE_ID>" // optional
    })
  })

  const data = await response.json()
  if (!response.ok) return NextResponse.json({ error: data }, { status: 400 })

  return NextResponse.json({ message: 'User created!', user: data.data })
}
