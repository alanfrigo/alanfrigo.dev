import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Frigo | Software Engineer",
  description: "Software Engineer specializing in AI, cloud infrastructure, and modern web technologies. Building scalable solutions with NextJS, Python, AWS, and more.",
  keywords: ["Software Engineer", "Full Stack Developer", "AI", "NextJS", "Python", "AWS", "React", "Cloud Infrastructure"],
  authors: [{ name: "Alan Frigo" }],
  creator: "Alan Frigo",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    title: "Alan Frigo | Software Engineer",
    description: "Software Engineer specializing in AI, cloud infrastructure, and modern web technologies.",
    siteName: "Alan Frigo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Frigo | Software Engineer",
    description: "Software Engineer specializing in AI, cloud infrastructure, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
