// Public profile content from Costin Cocea's September 2026 CV.
export const research = [
  {
    name: 'Can Personalized Agents Predict Social Experience?', date: 'Aug 2026 – Present',
    role: 'Research collaboration with Kazuki Kawamura',
    bullets: [
      'Developed personalized LLM agents that use adaptive interviews to model social preferences and assess connections based on users’ goals and context.',
      'Built a Python/PyTorch recommendation engine that learns from sparse pairwise scores to rank candidates and construct degree-constrained social graphs.',
      'Designed a longitudinal field study comparing feedback-updated and interview-only agents on compatibility predictions for unseen people. Planned measures: agreement with human judgments, match quality, LLM query efficiency, and interest in reconnecting.',
    ],
    tags: ['Personalized agents', 'PyTorch', 'Social computing', 'Study design'],
  },
  {
    name: 'User and Relationship Modeling from Conversation Data', date: 'Jun 2026 – Jul 2026',
    bullets: [
      'Built a system to model individual behavior and relationship dynamics from WhatsApp conversation data.',
      'Generated behavioral profiles linked to supporting messages; incorporated user corrections and tracked changes in expressed emotions and communication patterns.',
      'Compared users’ stated preferences with observed conversational behavior and interaction feedback.',
    ],
    tags: ['User modeling', 'Conversation data', 'Relationship dynamics'],
  },
  {
    name: 'Fine-Tuning Language Models to Predict Human Responses to Interventions', date: 'Aug 2026 – Present',
    bullets: [
      'Fine-tuned Qwen3.8-27B on SocSci210 with LoRA; compared standard SFT with additional objectives for matching response distributions within experimental conditions and predicting effects between conditions.',
      'Evaluated generalization to held-out studies using response-distribution and experimental-effect prediction errors; conducted ablations to isolate each additional loss term’s contribution.',
    ],
    tags: ['Qwen3.8-27B', 'SocSci210', 'LoRA', 'Model evaluation'],
  },
];

export const registry = {
  name: 'The Registry', role: 'Semantic Search Engine', date: 'Apr 2026 – May 2026',
  bullets: ['Built an end-to-end Python pipeline for natural-language search over 18,611 university student profiles: data processing, embeddings, FAISS/HNSW approximate nearest-neighbor search, cosine similarity, and top-k retrieval.'],
  tags: ['Python', 'FAISS / HNSW', 'Embeddings', 'Semantic search'],
};

// Keep the two featured projects first, matching the CV's relevance order.
export const projects = [...research, registry];

export const experience = [
  {
    name: 'INSPO', location: 'Tokyo, Japan', role: 'Software Engineer, Machine Learning', date: 'May 2025 – Aug 2025',
    bullets: [
      'Built and deployed the end-to-end Python ML backend as sole ML engineer for an app with 5,000+ users: outfit generation, personalized ranking, recommendation APIs, and SQL storage.',
      'Tuned behavioral feature weights with Taguchi orthogonal arrays; increased selection of recommended outfits by 37% versus the previous model in a production A/B test.',
    ], tags: ['Python', 'Recommendation systems', 'SQL', 'A/B testing'],
  },
  {
    name: 'BDMS Engineering', location: 'Brisbane, Australia', role: 'Data Analyst Intern', date: 'Jan 2025 – Mar 2025',
    bullets: [
      'Designed and deployed a Python/SQL test-analysis platform adopted as the team’s standard workflow: 10M+ sensor readings across 60+ motor/controller test batches. Cut data preparation and verification time by 83% (2 hours to 20 minutes per batch).',
      'Automated ingestion, validation, and sensor time alignment, detecting 85% of validated anomalies; delivered APIs, an interactive dashboard, reproducible reports, and optimized SQL for hardware comparisons and anomaly analysis.',
    ], tags: ['Python', 'SQL', 'Data pipelines', 'Anomaly detection'],
  },
];

export const education = [
  {name:'Stanford University', date:'May 2026 – Present', role:'Coursework in machine learning and cognitive science', detail:'CS229 Machine Learning; SYMSYS1 Minds and Machines; PSYCH80 Mind, Brain, and Behavior.'},
  {name:'IÉSEG School of Management', date:'Sep 2025 – Mar 2026', role:'Semester abroad · GPA: 18.7/20', detail:'Coursework: Data Science, Machine Learning, Econometrics, Research Methods.'},
  {name:'Bucharest University of Economic Studies', date:'Sep 2024 – Jun 2027', role:'CSIE & FABIZ · Double bachelor’s degrees', detail:'B.Sc. in Computer Science and B.Sc. in Economics.'},
];

export const skills = [
  {name:'Programming & Frameworks', detail:'Python, C++, C, SQL; PyTorch, scikit-learn, pandas, NumPy, Hugging Face Transformers, Datasets, PEFT.'},
  {name:'Machine Learning', detail:'Supervised/unsupervised learning, deep learning, reinforcement learning, recommendation systems, ranking, embeddings, matrix factorization; LLM fine-tuning (SFT, DPO, LoRA/QLoRA), personalized agents, user modeling.'},
  {name:'Research Methods', detail:'Experimental design, adaptive interviews, longitudinal study design, A/B testing, model evaluation, ablations.'},
  {name:'Research Engineering', detail:'Data pipelines, reproducible GPU experiments, experiment tracking, inference profiling; FAISS/HNSW, FastAPI, PostgreSQL, Docker, CI/CD, pytest.'},
];
