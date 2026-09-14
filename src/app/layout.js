import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata = {
  title: { default: 'Costin Cocea — Machine Learning & Research', template: '%s · Costin Cocea' },
  description: 'Costin Cocea is a machine learning researcher focused on recommendation systems, personalized LLM agents, and computational models of human behavior. Research at Stanford HCI Group.',
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
};
export default function RootLayout({children}) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><ThemeProvider>{children}</ThemeProvider></body></html>;
}
