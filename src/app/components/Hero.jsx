import Link from 'next/link';
import Footer from './Footer';
export default function Hero() {
  return <main id="main-content" className="hero">
    <h1>Machine learning<br />researcher.</h1>
    <div className="hero-copy">
      <p className="research-intro">Recommendation systems, personalized LLM agents, and computational models of human behavior.</p>
      <ul className="intro-list">
        <li><span aria-hidden="true">⚛️</span><span>research collaboration with Kazuki Kawamura</span></li>
        <li><span aria-hidden="true">↗</span><span>modeling people and relationships from conversation data</span></li>
        <li><span aria-hidden="true">🛠️</span><span>previously ML engineer @ INSPO, Tokyo</span></li>
      </ul>
      <section className="recent" aria-labelledby="recent-title">
        <h2 id="recent-title">working on:</h2>
        <ul className="arrow-list">
          <li>personalized agents that learn social preferences through conversation</li>
          <li>ranking and matching people from sparse pairwise scores</li>
          <li>fine-tuning language models to predict human responses to interventions</li>
        </ul>
      </section>
      <p className="highlights"><strong>studying:</strong> computer science & economics @ ASE Bucharest</p>
      <div className="hero-actions"><Link href="/resume/" className="button button-outline">View Résumé</Link><Link href="/projects/" className="button button-solid">View Projects</Link></div>
      <Footer />
    </div>
  </main>;
}
