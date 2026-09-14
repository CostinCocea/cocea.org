// Public profile content, adapted only from Costin Cocea's supplied CV.
export const experience = [
  {
    name: 'INSPO', location: 'Tokyo, Japan', role: 'Software Engineer, Machine Learning', date: 'May – Aug 2025',
    bullets: [
      'Built and deployed the end-to-end Python ML backend as the company’s sole ML engineer, integrating outfit generation, personalized ranking, recommendation APIs, and SQL storage. The app reached 5,000+ users and generated 100,000+ organic impressions in Japan.',
      'Tuned behavioral feature weights using Taguchi orthogonal arrays, increasing how often users selected recommended outfits by 37% versus the previous model in a production A/B test.',
    ], tags: ['Python', 'Recommendation systems', 'SQL', 'A/B testing'],
  },
  {
    name: 'BDMS Engineering', location: 'Brisbane, Australia', role: 'Data Analyst Intern', date: 'Jan – Mar 2025',
    bullets: [
      'Designed and deployed a Python/SQL test-analysis platform adopted as the engineering team’s standard workflow, processing 10M+ sensor readings across 60+ motor and controller test batches. Reduced data preparation and verification time by 83%, from two hours to 20 minutes per test batch.',
      'Automated ingestion, validation, and sensor time alignment to detect 85% of validated anomalies. Exposed results via APIs, an interactive dashboard, and reproducible reports; optimized SQL for hardware comparisons and anomaly analysis.',
    ], tags: ['Python', 'SQL', 'Data pipelines', 'Anomaly detection'],
  },
];
export const research = [
  {
    name: 'Personalized LLM Agents for Social Recommendation', institution: 'Stanford HCI Group', date: 'Aug 2026 – Present',
    role: 'Research collaboration with Kazuki Kawamura',
    bullets: [
      'Developed personalized LLM agents that model social preferences through conversational interviews and assess potential connections based on each user’s goals and context.',
      'Implemented a Python/PyTorch recommendation engine that learns from sparse pairwise scores to rank candidates and construct degree-constrained social graphs.',
      'Designed a longitudinal field study testing whether agents updated with user feedback predict compatibility with unseen people more accurately than interview-only models. Defined benchmarks for agreement with human judgments, match quality, LLM query efficiency, and participants’ interest in reconnecting.',
    ], tags: ['LLM agents', 'PyTorch', 'Social recommendation', 'Human-centered AI'],
  },
  {
    name: 'Friendship Formation', institution: 'University of Oxford', date: 'Nov 2025',
    role: 'Independent research with Prof. Robin Dunbar',
    bullets: ['Proposed a three-stage framework for friendship formation: situational overlap, behavioral compatibility, and repeated interaction, as an alternative to Dunbar’s Seven Pillars of Friendship.'],
    tags: ['Social connection', 'Friendship formation', 'Research framework'],
  },
];
export const registry = {
  name: 'The Registry', role: 'Semantic Search Engine', date: 'Apr – May 2026',
  bullets: ['Built an end-to-end Python pipeline for natural-language search over 18,611 university student profiles, with data processing, embeddings, FAISS/HNSW approximate nearest-neighbor search, cosine-similarity scoring, and top-k retrieval.'],
  tags: ['Python', 'FAISS / HNSW', 'Embeddings', 'Semantic search'],
};
export const education = [
  {name:'Stanford University', date:'2026', role:'Coursework in machine learning and cognitive science', detail:'CS229 Machine Learning; SYMSYS 1 Minds and Machines; PSYCH 80 Mind, Brain, and Behavior.'},
  {name:'IÉSEG School of Management', date:'Sep 2025 – Mar 2026', role:'Semester abroad · GPA: 18.7/20', detail:'Coursework in Data Science, Machine Learning, Econometrics, and Research Methods.'},
  {name:'Bucharest University of Economic Studies', date:'Sep 2024 – Jun 2027', role:'CSIE & FABIZ · Double bachelor’s degrees', detail:'B.Sc. in Computer Science and B.Sc. in Business Administration.'},
];
export const skills = [
  {name:'Programming & tools', detail:'Python, C++, C, SQL; PyTorch, FastAPI, Flask, FAISS, scikit-learn, pandas, NumPy, SQLAlchemy; PostgreSQL, Docker, Git, CI/CD, Bash, pytest.'},
  {name:'Data structures & algorithms', detail:'Graphs, trees, heaps, hash tables, dynamic programming, approximate nearest-neighbor search, degree-constrained matching.'},
  {name:'Machine learning', detail:'Supervised and unsupervised learning, deep learning, reinforcement learning, recommendation systems, ranking, embeddings, matrix factorization, experimental design.'},
];
export const awards = [
  {name:'Silicon Valley Fellowship', detail:'Selected as one of 25 fellows from 1,000+ applicants for mentorship from technology founders, researchers, and venture investors.'},
  {name:'Business Fest Startup Challenge', detail:'Placed third out of 60 teams for developing and pitching an MVP travel app.'},
  {name:'Innovation Labs 2026', detail:'Invited guest juror.'},
  {name:'Junior Ambassador of the European Union', detail:'Represented Romania in initiatives across 6+ countries and organized public programs engaging 200+ participants.'},
  {name:'Junior Chamber International (JCI)', detail:'Independently led a charity initiative that raised €10,000+ for orphanages and elderly care programs.'},
];
