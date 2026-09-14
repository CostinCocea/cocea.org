import PageShell from '../components/PageShell';
import WorkEntry from '../components/WorkEntry';
import { experience, registry } from '../lib/profile';
export const metadata = {title:'Projects',description:'Recommendation systems at INSPO, semantic search with The Registry, and engineering data analysis at BDMS. Work by Costin Cocea.'};
export default function Projects() {
  return <PageShell title="projects" intro="A few things I’ve built, from personalized recommendations to search and data tools."><div className="work-list"><WorkEntry item={registry} /><WorkEntry item={experience[0]} /><WorkEntry item={experience[1]} /></div></PageShell>;
}
