import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
// Preserve the site's existing font files without fetching fonts at build time.
const geistSans = localFont({ src: './fonts/geist-latin.woff2', variable: '--font-geist-sans', weight: '100 900', display: 'swap' });
const geistMono = localFont({ src: './fonts/geist-mono-latin.woff2', variable: '--font-geist-mono', weight: '100 900', display: 'swap' });
export const metadata = {
  title: { default: 'Costin Cocea — Machine Learning & Research', template: '%s · Costin Cocea' },
  description: 'Costin Cocea works on personalized LLM agents, recommendation systems, user modeling, and computational models of human behavior.',
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
};
export default function RootLayout({children}) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><ThemeProvider>{children}</ThemeProvider></body></html>;
}
