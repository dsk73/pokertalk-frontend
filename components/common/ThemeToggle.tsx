// components/common/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="text-white" /> : <Moon className="text-black" />}
    </button>
  );
}
