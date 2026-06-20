import "./globals.css";

export const metadata = {
  title: "Aman Prasad — Backend Developer & Systems Engineer",
  description: "Backend Developer and Systems Engineer from Kolkata. Focused on low-latency architectures, database optimization, and high-performance algorithms.",
  keywords: "Aman Prasad, Backend Developer, SDE, Systems Engineer, Portfolio, Node.js, TypeScript, React, LeetCode, Redis, Kafka, Kolkata",
  authors: [{ name: "Aman Prasad" }],
  openGraph: {
    title: "Aman Prasad — Backend Developer & Systems Engineer",
    description: "Backend Developer and Systems Engineer. Explore my projects, technical skills, and battle record.",
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
