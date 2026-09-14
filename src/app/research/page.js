import PageShell from '../components/PageShell';
import WorkEntry from '../components/WorkEntry';
import { research } from '../lib/profile';
export const metadata = {title:'Research', description:'Costin Cocea’s research on personalized LLM agents, social recommendation, and friendship formation.'};
export default function Research() {
  return <PageShell title="research" intro="How can AI help people find meaningful connections?"><div className="work-list">{research.map(item=><WorkEntry item={item} key={item.name} />)}</div></PageShell>;
}
