import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.addEventListener('DOMContentLoaded', function() {
                  var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        if (entry.target.querySelector('.text-reveal-content')) {
                          entry.target.classList.add('reveal-active');
                        }
                      }
                    });
                  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
                  document.querySelectorAll('.reveal').forEach(function(el) {
                    observer.observe(el);
                  });
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
