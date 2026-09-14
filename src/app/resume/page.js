import PageShell from '../components/PageShell';
import PrintResume from '../components/PrintResume';
import { experience, research, registry, education, skills, awards } from '../lib/profile';
export const metadata = {title:'Résumé',description:'Education, experience, research, projects, skills, and achievements of Costin Cocea.'};
function ResumeEntry({item}) { return <article className="resume-entry"><div className="resume-entry-heading"><h3>{item.institution || item.name}</h3><span>{item.date}</span></div><p className="resume-role">{item.institution ? `${item.name} · ${item.role}` : item.role}{item.location && ` · ${item.location}`}</p>{item.detail && <p>{item.detail}</p>}{item.bullets && <ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</article>; }
export default function Resume() {
  return <PageShell title="résumé"><div className="resume"><div className="resume-contact"><div><h2>Costin Cocea</h2><p><a href="mailto:cocea@stanford.edu">cocea@stanford.edu</a><span> · </span><a href="https://www.linkedin.com/in/costincocea/" target="_blank" rel="noopener noreferrer">LinkedIn</a><span> · </span><a href="https://cocea.org" target="_blank" rel="noopener noreferrer">cocea.org</a></p></div><PrintResume /></div>
    <section aria-labelledby="resume-research"><h2 id="resume-research" className="resume-section-title">Research & projects</h2>{[research[0],registry,research[1]].map(item=><ResumeEntry key={item.name} item={item}/>)}</section>
    <section aria-labelledby="resume-experience"><h2 id="resume-experience" className="resume-section-title">Experience</h2>{experience.map(item=><ResumeEntry key={item.name} item={item}/>)}</section>
    <section aria-labelledby="resume-education"><h2 id="resume-education" className="resume-section-title">Education</h2>{education.map(item=><ResumeEntry key={item.name} item={item}/>)}</section>
    <section aria-labelledby="resume-skills"><h2 id="resume-skills" className="resume-section-title">Skills</h2><dl className="resume-details">{skills.map(item=><div key={item.name}><dt>{item.name}</dt><dd>{item.detail}</dd></div>)}</dl></section>
    <section aria-labelledby="resume-awards"><h2 id="resume-awards" className="resume-section-title">Awards & achievements</h2><dl className="resume-details">{awards.map(item=><div key={item.name}><dt>{item.name}</dt><dd>{item.detail}</dd></div>)}</dl></section>
  </div></PageShell>;
}
