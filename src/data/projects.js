// Add a new project by appending an object to this array.
// Only include tech, features and links that are real and verifiable.
//
// image:  path under /public (e.g. 'images/mandicare.webp'); leave '' for a placeholder.
// links:  { label, href } entries such as a GitHub repo or live demo; leave [] if none yet.
// status: 'In Progress' | 'Completed'

const projects = [
  {
    id: 'mandicare',
    icon: 'stethoscope',
    art: 'mandicare',
    title: 'MandiCare',
    subtitle: 'Mandibular Trauma Guidance and Clinical Decision Support Application',
    status: 'In Progress',
    meta: 'Enbott Technologies',
    description:
      'A mobile application designed to assist young maxillofacial surgeons in understanding mandibular fracture patterns, reviewing clinical findings, and exploring treatment guidance based on doctor-entered patient information.',
    features: [
      'Clinical case data collection',
      'Mandibular fracture classification and analysis',
      'Treatment recommendation using an existing KNN-based approach',
      'Reference-case retrieval to support clinical review',
      'Ongoing exploration of RAG and small language models',
    ],
    tech: ['Flutter', 'Machine Learning', 'Firebase'],
    note: "A clinical decision-support prototype intended to assist professional review, not replace a qualified clinician's judgment.",
    image: '',
    links: [],
  },
  {
    id: 'ppe-detection',
    icon: 'shield',
    art: 'ppe',
    title: 'PPE Detection System',
    subtitle: 'AI/ML industrial safety monitoring',
    status: 'Completed',
    meta: 'Ramco Mills · 2026',
    description:
      'An AI-based industrial safety monitoring project designed to detect personal protective equipment, such as safety helmets, in industrial environments.',
    features: [
      'Image-based PPE detection',
      'Machine learning and computer vision techniques',
      'Industrial safety compliance monitoring',
    ],
    tech: ['Machine Learning', 'Computer Vision'],
    note: null,
    image: '',
    links: [],
  },
]

export default projects
