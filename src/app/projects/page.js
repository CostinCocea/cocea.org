import PageShell from '../components/PageShell';
import WorkEntry from '../components/WorkEntry';
import { projects } from '../lib/profile';
export const metadata = {title:'Projects',description:'Personalized agents, user and relationship modeling, language-model fine-tuning, and semantic search. Projects by Costin Cocea.'};
export default function Projects() {
  return <PageShell title="projects" intro="Personalized agents, models of human behavior, and the systems behind them."><div className="work-list">{projects.map(item=><WorkEntry key={item.name} item={item} />)}</div></PageShell>;
}
