import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Oath - Honor Your Commitments with Intelligent Reminders",
  description: "Oath uses AI to understand task complexity and creates smart notification schedules. Track which commitments you honored vs. missed with honest accountability.",
  keywords: ["commitment tracker", "task management", "AI notifications", "honor tracking", "accountability app"],
  authors: [{ name: "Oath" }],
  openGraph: {
    title: "Oath - Intelligent Commitment Tracking",
    description: "Keep your word with AI-powered reminders that adapt to task complexity.",
    type: "website",
    siteName: "Oath",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oath - Honor Your Commitments",
    description: "AI-powered task management that helps you keep your word.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="oath-body oath-text-primary oath-bg-default antialiased">
        {children}
      </body>
    </html>
  );
}
