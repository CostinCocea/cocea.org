import { Linkedin, Mail, Globe } from 'lucide-react';
const links = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/costincocea/', icon: Linkedin },
  { name: 'Email Costin', href: 'mailto:cocea@stanford.edu', icon: Mail },
  { name: 'cocea.org', href: 'https://cocea.org', icon: Globe },
];
export default function Footer() {
  return <footer className="site-footer"><div className="social-links">{links.map(({name,href,icon:Icon}) => <a key={name} href={href} aria-label={name} title={name} {...(href.startsWith('https:') ? {target:'_blank',rel:'noopener noreferrer'} : {})}><Icon size={20} strokeWidth={1.7} /><span>{name}</span></a>)}</div><p>2026 © Costin Cocea</p></footer>;
}
