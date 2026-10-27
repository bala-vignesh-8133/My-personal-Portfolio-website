// `type` controls the badge: 'internship' | 'project'.
// Enbott Technologies is presented as project experience, not employment.
// `status` on each point: 'in-progress' | 'exploring' | 'completed'.

const experience = [
  {
    id: 'enbott',
    type: 'project',
    badge: 'Current project experience',
    role: 'Project Intern',
    organization: 'Enbott Technologies',
    period: 'Ongoing',
    summary:
      'Working on real-world application development projects involving mobile applications, backend services, and AI/ML-assisted functionality.',
    points: [
      {
        text: 'MandiCare: Mandibular Trauma Guidance and Clinical Decision Support mobile application.',
        status: 'in-progress',
      },
      { text: 'Clinical data collection and workflow automation.', status: 'in-progress' },
      {
        text: 'Retrieval-augmented generation (RAG) and small language models for clinical information retrieval.',
        status: 'exploring',
      },
    ],
  },
  {
  id: 'ramco-mills',
  type: 'project',
  badge: 'Academic project',
  role: 'AI/ML Project Developer',
  organization: 'Ramco Mills',
  period: 'Completed', // Update if the project is ongoing
  summary:
    'Developed a Personal Protective Equipment (PPE) detection system using computer vision to identify safety equipment and support workplace safety monitoring.',
  points: [
    {
      text: 'PPE Detection: AI-based detection of personal protective equipment in workplace environments.',
      status: 'completed',
    },
    {
      text: 'Computer Vision: Applied object detection techniques to identify safety equipment in images or video streams.',
      status: 'completed',
    },
    {
      text: 'Workplace Safety: Explored automated monitoring to help identify potential PPE compliance issues.',
      status: 'completed',
    },
  ],
},
  {
    id: 'digital-grasp',
    type: 'internship',
    badge: 'Internship',
    role: 'Full-Stack Development Intern',
    organization: 'Digital Grasp',
    period: 'June 2025 – July 2025',
    summary: null,
    points: [
      {
        text: 'Developed dynamic web applications using HTML, CSS, JavaScript, Python, and Java.',
        status: 'completed',
      },
      {
        text: 'Integrated REST APIs with SQL databases for backend functionality and data handling.',
        status: 'completed',
      },
      { text: 'Collaborated with team members using Git.', status: 'completed' },
      {
        text: 'Worked on improving code efficiency and application functionality.',
        status: 'completed',
      },
    ],
  },
]

export default experience
