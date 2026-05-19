import "./globals.css";

export const metadata = {
  title: "Aman Prasad — The Pirate's Parchment",
  description: "Backend Developer & Competitive Programmer from Kolkata. Explore the treasure map of my projects, skills, and adventures in code.",
  keywords: "Aman Prasad, Backend Developer, Competitive Programmer, Portfolio, Node.js, React, LeetCode",
  authors: [{ name: "Aman Prasad" }],
  openGraph: {
    title: "Aman Prasad — The Pirate's Parchment",
    description: "Backend Developer & Competitive Programmer. Explore the treasure map of my projects and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
