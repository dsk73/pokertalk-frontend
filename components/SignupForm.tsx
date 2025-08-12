// components/SignupForm.tsx
'use client'
import { useState } from 'react'

export default function SignupForm() {
  const [form, setForm] = useState({ email: '', phone_number: '', password: '' })

  const handleSignup = async () => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(form),
    })
    const data = await res.json()
    alert(data.message || data.error?.message)
  }

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Phone Number" onChange={(e) => setForm({ ...form, phone_number: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}
