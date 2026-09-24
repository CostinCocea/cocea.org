import Link from 'next/link';
import Footer from './Footer';
export default function Hero() {
  return <main id="main-content" className="hero">
    <h1>Machine learning<br />researcher.</h1>
    <div className="hero-copy">
      <p className="research-intro">Recommendation systems, personalized LLM agents, and computational models of human behavior.</p>
      <ul className="intro-list">
        <li><span aria-hidden="true">⚛️</span><span>researching how personalized AI can understand people and help them connect</span></li>
        <li><span aria-hidden="true">↗</span><span>independent research with Robin Dunbar @ Oxford</span></li>
        <li><span aria-hidden="true">🛠️</span><span>previously ML engineer @ INSPO, Tokyo</span></li>
      </ul>
      <section className="recent" aria-labelledby="recent-title">
        <h2 id="recent-title">working on:</h2>
        <ul className="arrow-list">
          <li>Testing whether personalized AI agents can predict compatibility between people, and whether feedback from real interactions improves those predictions.</li>
        </ul>
      </section>
      <p className="highlights"><strong>also:</strong> Silicon Valley Fellow · CS &amp; business @ ASE Bucharest</p>
      <div className="hero-actions"><Link href="/resume/" className="button button-outline">View Résumé</Link><Link href="/projects/" className="button button-solid">View Projects</Link></div>
      <Footer />
    </div>
  </main>;
}
