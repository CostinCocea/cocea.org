import Header from './components/Header';
import Hero from './components/Hero';
import ShaderSphere from './components/ShaderSphere';
export default function HomePage() {
  return <div className="home-surface"><div className="visual-layer" aria-hidden="true"><ShaderSphere /></div><div className="home-header"><Header /></div><Hero /></div>;
}
