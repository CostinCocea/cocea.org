import HeaderSecondary from './HeaderSecondary';
import Footer from './Footer';
export default function PageShell({title, intro, children}) {
  return <div className="inner-page"><div className="page-shell"><HeaderSecondary /><main id="main-content" className="page-content"><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}{children}</main><div className="page-footer"><Footer /></div></div></div>;
}
