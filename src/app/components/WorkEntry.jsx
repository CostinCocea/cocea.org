export default function WorkEntry({item}) {
  return <article className="work-entry"><div className="entry-meta"><span>{item.institution || item.location || item.role}</span><span>{item.date}</span></div><h2>{item.name}</h2>{(item.institution || item.location) && <p className="entry-role">{item.role}</p>}<ul className="entry-bullets">{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>{item.tags && <ul className="tags" aria-label="Topics and tools">{item.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>}</article>;
}
