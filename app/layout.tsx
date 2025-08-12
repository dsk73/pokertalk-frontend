// app/layout.tsx
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import SessionWrapper from "@/components/common/SessionWrapper";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "PokerTalk",
  description: "Your Poker News Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
