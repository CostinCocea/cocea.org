"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
export default function Header({ secondary = false }) {
  const pathname = usePathname();
  return <header className={`site-header ${secondary ? 'secondary-header' : ''}`}>
    <Link href="/" className="wordmark" aria-label="Costin Cocea, home">Costin Cocea<span aria-hidden="true">.</span></Link>
    <nav aria-label="Main navigation" className="site-nav">
      {[['/', 'About'], ['/projects/', 'Projects'], ['/research/', 'Research']].map(([href, label]) => <Link href={href} key={href} className="nav-link" aria-current={pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined}>{label}</Link>)}
    </nav>
    <ThemeSwitcher />
  </header>;
}
