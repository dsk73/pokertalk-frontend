// components/LoginForm.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (data.access_token) {
      localStorage.setItem('token', data.access_token)
      router.push('/profile')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}
