import PageShell from '../components/PageShell';
import WorkEntry from '../components/WorkEntry';
import { research } from '../lib/profile';
export const metadata = {title:'Research', description:'Research on personalized LLM agents, conversation-based user modeling, and predicting human responses.'};
export default function Research() {
  return <PageShell title="research" intro="How well can personalized AI models understand people and predict their experiences?"><div className="work-list">{research.map(item=><WorkEntry item={item} key={item.name} />)}</div></PageShell>;
}
