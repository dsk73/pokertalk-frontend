// lib/auth.ts

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

// LOGIN user with Strapi
export async function loginUser({ identifier, password }: { identifier: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Login failed");
  }

  return data; // contains jwt and user
}

// REGISTER new user
export async function registerUser({ username, email, password }: { username: string; email: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/local/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Registration failed");
  }

  return data;
}

// Save token to localStorage
export function saveToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", token);
  }
}

// Get user profile using JWT
export async function getUserProfile(token: string) {
  const res = await fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Failed to fetch user profile");
  }

  return data;
}
