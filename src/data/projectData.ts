export interface Artifact {
  id: string;
  name: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'review' | 'completed';
  deliverables: string[];
  stakeholders: string[];
  dependencies?: string[];
}

export interface Phase {
  id: string;
  name: string;
  description: string;
  status: 'future' | 'planned' | 'in-progress' | 'completed';
  color: string;
  artifacts: Artifact[];
  keyActivities: string[];
  outcomes: string[];
}

export interface WorkstreamBucket {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  items: {
    name: string;
    description: string;
    effort: 'low' | 'medium' | 'high';
    priority: 'critical' | 'high' | 'medium' | 'low';
  }[];
}

export interface StrategicProofPoint {
  id: string;
  category: string;
  description: string;
  icon: string;
}

export interface ActionItem {
  id: string;
  owner: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
}

// Strategic Proof Points for the Business Case Builder
export const strategicProofPoints: StrategicProofPoint[] = [
  {
    id: 'spp-1',
    category: 'AI Positioning',
    description: 'Trust as a Value Driver - Position AI capabilities as enablers of trust and efficiency',
    icon: 'brain'
  },
  {
    id: 'spp-2',
    category: 'ROI & Business Impact',
    description: 'Quantifiable cost savings, efficiency gains, and productivity improvements',
    icon: 'trending-up'
  },
  {
    id: 'spp-3',
    category: 'Customer Success Stories',
    description: 'Progressive value flow surfacing customer testimonials and benchmarks',
    icon: 'users'
  },
  {
    id: 'spp-4',
    category: 'Competitive Differentiation',
    description: 'Unique value propositions that set Workday apart from competitors',
    icon: 'award'
  },
  {
    id: 'spp-5',
    category: 'Implementation Excellence',
    description: 'Proven deployment methodology, support model, and time-to-value metrics',
    icon: 'rocket'
  },
  {
    id: 'spp-6',
    category: 'Security & Compliance',
    description: 'Enterprise-grade security, data privacy, and regulatory compliance frameworks',
    icon: 'shield'
  }
];

// Top 3 Things the Tool Must Do Perfectly
export const coreCapabilities = [
  {
    id: 'cap-1',
    title: 'Persona-to-Solution Mapping',
    description: 'Dynamically align product recommendations with specific user problems and personas',
    priority: 'critical',
    details: [
      'Matrix mapping personas to pain points',
      'Solution recommendations based on role',
      'Personalized value propositions'
    ]
  },
  {
    id: 'cap-2',
    title: 'Progressive Value Discovery',
    description: 'Surface customer stories and benchmarks throughout the conversation flow',
    priority: 'critical',
    details: [
      'Contextual customer proof points',
      'Industry-specific benchmarks',
      'ROI calculators and projections'
    ]
  },
  {
    id: 'cap-3',
    title: 'Business Case Generation',
    description: 'Produce compelling, data-driven business cases tailored to stakeholder needs',
    priority: 'critical',
    details: [
      'Automated business case assembly',
      'Stakeholder-specific outputs',
      'Export and sharing capabilities'
    ]
  }
];

// Work Breakdown Structure Buckets
export const workstreamBuckets: WorkstreamBucket[] = [
  {
    id: 'ws-wireframes',
    name: 'Wireframes',
    description: '3-5 wireframe templates for secondary and tertiary pages with mid-fidelity and basic interactivity',
    icon: 'layout',
    color: '#2c69b6',
    items: [
      {
        name: 'Secondary Page Templates',
        description: 'Mid-fidelity wireframes for secondary navigation pages',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Tertiary Page Templates',
        description: 'Detailed page layouts for tertiary content pages',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Component Mapping',
        description: 'Map components to templates with stakeholder input',
        effort: 'low',
        priority: 'critical'
      },
      {
        name: 'Basic Interactivity',
        description: 'Add navigation and interaction states',
        effort: 'low',
        priority: 'medium'
      }
    ]
  },
  {
    id: 'ws-content',
    name: 'Content Framework',
    description: 'Content strategy, tone of voice alignment, and tagging plan for brand standards',
    icon: 'file-text',
    color: '#00857c',
    items: [
      {
        name: 'Content Strategy Document',
        description: 'Define content hierarchy and messaging framework',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Tone of Voice Guidelines',
        description: 'Align copywriting with Workday brand standards',
        effort: 'low',
        priority: 'high'
      },
      {
        name: 'Tagging Plan',
        description: 'Content taxonomy and tagging for measurement',
        effort: 'medium',
        priority: 'medium'
      },
      {
        name: 'Copywriting Templates',
        description: 'Reusable copy patterns for key interactions',
        effort: 'medium',
        priority: 'medium'
      }
    ]
  },
  {
    id: 'ws-advocacy',
    name: 'Advocacy Builder',
    description: 'Full product development including strategy, design, prototyping, and rollout',
    icon: 'rocket',
    color: '#f4990b',
    items: [
      {
        name: 'Strategy & Vision',
        description: 'Define product strategy and value proposition',
        effort: 'medium',
        priority: 'critical'
      },
      {
        name: 'Business Requirements',
        description: 'Gather and document detailed requirements',
        effort: 'high',
        priority: 'critical'
      },
      {
        name: 'Design & Prototyping (Figma)',
        description: 'High-fidelity designs and interactive prototypes',
        effort: 'high',
        priority: 'critical'
      },
      {
        name: 'Code Prototyping',
        description: 'Functional prototype development',
        effort: 'high',
        priority: 'high'
      },
      {
        name: 'Tool Assessment',
        description: 'Evaluate existing tools and integration points',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Process Mapping',
        description: 'Map tool processes to advocacy builder functionality',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Data Hygiene Review',
        description: 'Ensure no duplicative data across integrations',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'User Testing',
        description: 'Embedded testing with feedback synthesis',
        effort: 'medium',
        priority: 'critical'
      },
      {
        name: 'Governance Plan',
        description: 'Manage product additions and updates',
        effort: 'low',
        priority: 'medium'
      },
      {
        name: 'Rollout Planning',
        description: 'Phased deployment strategy',
        effort: 'medium',
        priority: 'high'
      }
    ]
  },
  {
    id: 'ws-roadmap',
    name: 'Road Map',
    description: 'Strategic roadmap aligned with digital transformation goals',
    icon: 'map',
    color: '#6b5b95',
    items: [
      {
        name: 'Strategy & Vision Definition',
        description: 'Collaborative goal-setting with stakeholders',
        effort: 'medium',
        priority: 'critical'
      },
      {
        name: 'Feature Prioritization',
        description: 'Gather and prioritize feature requirements',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Release Organization',
        description: 'Structure releases and milestones',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Visualization',
        description: 'Create visual roadmap artifacts',
        effort: 'low',
        priority: 'medium'
      },
      {
        name: 'Digital Transformation Alignment',
        description: 'Connect redesign to broader transformation initiatives',
        effort: 'medium',
        priority: 'critical'
      }
    ]
  },
  {
    id: 'ws-enablement',
    name: 'Enablement Workshop',
    description: 'Help client implement recommendations with prioritization and analysis',
    icon: 'presentation',
    color: '#e53935',
    items: [
      {
        name: 'Requirements Gathering',
        description: 'Collect implementation requirements',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Prioritization Matrix',
        description: 'Business value vs level-of-effort analysis',
        effort: 'medium',
        priority: 'critical'
      },
      {
        name: 'AI & Personalization Guidance',
        description: 'Address client questions on AI and personalization',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Measurement Framework',
        description: 'Define success metrics and KPIs',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Workshop Facilitation',
        description: 'Conduct enablement workshop sessions',
        effort: 'medium',
        priority: 'high'
      }
    ]
  },
  {
    id: 'ws-research',
    name: 'Tree Testing & Research',
    description: 'User research and tree testing facilitated by research team',
    icon: 'search',
    color: '#4caf50',
    items: [
      {
        name: 'Tree Testing Proposal',
        description: 'Finalize and share proposal with client',
        effort: 'low',
        priority: 'high'
      },
      {
        name: 'Test Facilitation',
        description: 'Research team conducts tree testing',
        effort: 'medium',
        priority: 'high'
      },
      {
        name: 'Results Synthesis',
        description: 'Analyze and present findings',
        effort: 'medium',
        priority: 'high'
      }
    ]
  }
];

// Project Phases for Roadmap
export const projectPhases: Phase[] = [
  {
    id: 'phase-1',
    name: 'Discovery & Strategy',
    description: 'Define strategy, vision, and gather requirements through stakeholder collaboration',
    status: 'in-progress',
    color: '#2c69b6',
    keyActivities: [
      'Stakeholder alignment sessions',
      'Strategy and vision definition',
      'Requirements gathering',
      'Tool assessment and data hygiene review'
    ],
    outcomes: [
      'Aligned strategic vision document',
      'Comprehensive requirements spec',
      'Tool integration assessment'
    ],
    artifacts: [
      {
        id: 'art-1-1',
        name: 'Strategic Vision Document',
        description: 'Define product strategy and value proposition for the Advocacy Builder',
        status: 'in-progress',
        deliverables: ['Vision statement', 'Strategic objectives', 'Success metrics'],
        stakeholders: ['Harleen', 'Brian', 'Robin']
      },
      {
        id: 'art-1-2',
        name: 'Business Requirements Document',
        description: 'Comprehensive requirements including persona-solution matrix',
        status: 'in-progress',
        deliverables: ['Functional requirements', 'User stories', 'Acceptance criteria'],
        stakeholders: ['Kevin', 'Ben', 'Brian']
      },
      {
        id: 'art-1-3',
        name: 'Tool Assessment Report',
        description: 'Evaluate existing tools and integration requirements',
        status: 'not-started',
        deliverables: ['Tool inventory', 'Integration map', 'Data flow diagrams'],
        stakeholders: ['Kevin', 'Ross']
      }
    ]
  },
  {
    id: 'phase-2',
    name: 'Design & Prototyping',
    description: 'Create wireframes, high-fidelity designs, and interactive prototypes',
    status: 'planned',
    color: '#f4990b',
    keyActivities: [
      'Wireframe development (3-5 templates)',
      'Component mapping to templates',
      'High-fidelity design in Figma',
      'Interactive prototyping'
    ],
    outcomes: [
      'Mid-fidelity wireframes',
      'High-fidelity design system',
      'Clickable prototype'
    ],
    artifacts: [
      {
        id: 'art-2-1',
        name: 'Wireframe Templates',
        description: '3-5 mid-fidelity wireframes for secondary and tertiary pages',
        status: 'not-started',
        deliverables: ['Secondary page templates', 'Tertiary page templates', 'Navigation flows'],
        stakeholders: ['Brian', 'Ben', 'Sarah'],
        dependencies: ['art-1-2']
      },
      {
        id: 'art-2-2',
        name: 'High-Fidelity Designs',
        description: 'Polished visual designs with Workday branding',
        status: 'not-started',
        deliverables: ['Visual mockups', 'Design specifications', 'Asset library'],
        stakeholders: ['Brian', 'Kevin'],
        dependencies: ['art-2-1']
      },
      {
        id: 'art-2-3',
        name: 'Interactive Prototype',
        description: 'Clickable prototype in Figma for stakeholder review',
        status: 'not-started',
        deliverables: ['Figma prototype', 'Interaction specifications', 'User flow documentation'],
        stakeholders: ['Kevin', 'Sarah', 'Robin'],
        dependencies: ['art-2-2']
      }
    ]
  },
  {
    id: 'phase-3',
    name: 'Content & Framework',
    description: 'Develop content strategy, tagging plan, and governance framework',
    status: 'planned',
    color: '#00857c',
    keyActivities: [
      'Content strategy development',
      'Tone of voice alignment',
      'Tagging and taxonomy planning',
      'Governance framework creation'
    ],
    outcomes: [
      'Content framework document',
      'Brand-aligned copy guidelines',
      'Measurement-ready tagging plan'
    ],
    artifacts: [
      {
        id: 'art-3-1',
        name: 'Content Strategy',
        description: 'Strategic approach to content within the Advocacy Builder',
        status: 'not-started',
        deliverables: ['Content hierarchy', 'Messaging framework', 'Content templates'],
        stakeholders: ['Kala', 'Ben', 'Brian']
      },
      {
        id: 'art-3-2',
        name: 'Tagging & Measurement Plan',
        description: 'Taxonomy and tagging strategy for analytics',
        status: 'not-started',
        deliverables: ['Tag taxonomy', 'Measurement framework', 'Analytics requirements'],
        stakeholders: ['Ross', 'Kevin']
      },
      {
        id: 'art-3-3',
        name: 'Governance Framework',
        description: 'Process for managing product additions and updates',
        status: 'not-started',
        deliverables: ['Governance model', 'Update procedures', 'Role definitions'],
        stakeholders: ['Kala', 'Robin']
      }
    ]
  },
  {
    id: 'phase-4',
    name: 'Development & Testing',
    description: 'Build functional prototype, conduct user testing, and iterate',
    status: 'future',
    color: '#6b5b95',
    keyActivities: [
      'Code prototype development',
      'Process mapping implementation',
      'User testing sessions',
      'Feedback synthesis and iteration'
    ],
    outcomes: [
      'Functional code prototype',
      'User testing insights',
      'Refined product design'
    ],
    artifacts: [
      {
        id: 'art-4-1',
        name: 'Functional Prototype',
        description: 'Working code prototype with core functionality',
        status: 'not-started',
        deliverables: ['React application', 'API integrations', 'Data connections'],
        stakeholders: ['Kevin', 'Ross'],
        dependencies: ['art-2-3', 'art-1-3']
      },
      {
        id: 'art-4-2',
        name: 'User Testing Report',
        description: 'Synthesized findings from user testing sessions',
        status: 'not-started',
        deliverables: ['Test results', 'User feedback synthesis', 'Prioritized changes'],
        stakeholders: ['Kristen', 'Sarah', 'Robin'],
        dependencies: ['art-4-1']
      }
    ]
  },
  {
    id: 'phase-5',
    name: 'Rollout & Enablement',
    description: 'Plan rollout, conduct enablement workshops, and hand off to client',
    status: 'future',
    color: '#e53935',
    keyActivities: [
      'Rollout planning',
      'Enablement workshop facilitation',
      'Documentation and training',
      'Handoff and support planning'
    ],
    outcomes: [
      'Rollout plan',
      'Trained client team',
      'Complete documentation'
    ],
    artifacts: [
      {
        id: 'art-5-1',
        name: 'Rollout Plan',
        description: 'Phased deployment strategy for the Advocacy Builder',
        status: 'not-started',
        deliverables: ['Deployment timeline', 'Risk mitigation plan', 'Success criteria'],
        stakeholders: ['Ross', 'Robin', 'Harleen']
      },
      {
        id: 'art-5-2',
        name: 'Enablement Materials',
        description: 'Workshop materials and training documentation',
        status: 'not-started',
        deliverables: ['Workshop agenda', 'Training guides', 'Reference documentation'],
        stakeholders: ['Sarah', 'Kristen']
      },
      {
        id: 'art-5-3',
        name: 'Prioritization Matrix',
        description: 'Business value vs effort analysis for feature prioritization',
        status: 'not-started',
        deliverables: ['Feature matrix', 'Priority rankings', 'Implementation recommendations'],
        stakeholders: ['Ross', 'Sarah', 'Robin']
      }
    ]
  }
];

// Action Items from Meeting Notes
export const actionItems: ActionItem[] = [
  {
    id: 'action-1',
    owner: 'VML',
    description: 'Incorporate AI positioning and "Trust as a Value Driver" into the strategic deck',
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'action-2',
    owner: 'VML',
    description: 'Identify the "Top 3 things" the tool must do perfectly to win, avoiding over-engineering in the initial phase',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 'action-3',
    owner: 'VML',
    description: 'Define the 6 specific "Strategic Proof Point" categories for the business case builder',
    status: 'completed',
    priority: 'high'
  },
  {
    id: 'action-4',
    owner: 'VML',
    description: 'Develop the "progressive value" flow to surface customer stories and benchmarks throughout the conversation',
    status: 'pending',
    priority: 'high'
  },
  {
    id: 'action-5',
    owner: 'VML',
    description: 'Establish the persona-to-solution matrix to ensure product recommendations align with user problems',
    status: 'pending',
    priority: 'high'
  }
];

// Key Stakeholders
export const stakeholders = [
  { name: 'Harleen', role: 'Project Lead', focus: 'Value-based model, stakeholder relations' },
  { name: 'Ross', role: 'Technical Lead', focus: 'Work breakdown, roadmap' },
  { name: 'Kevin', role: 'Design Lead', focus: 'Advocacy builder, prototyping' },
  { name: 'Sarah', role: 'Strategy', focus: 'Roadmap, enablement workshop' },
  { name: 'Kala', role: 'Content Strategy', focus: 'Content framework, governance' },
  { name: 'Kristen', role: 'Research', focus: 'Tree testing, user research' },
  { name: 'Brian', role: 'Client - Design', focus: 'Wireframes, component design' },
  { name: 'Ben', role: 'Client - Product', focus: 'Requirements, content' },
  { name: 'Robin', role: 'Client - Executive', focus: 'Strategy, digital transformation' },
  { name: 'Rachel', role: 'Client - Research', focus: 'Tree testing support' }
];

// Value Proposition Elements
export const valueProposition = {
  title: 'Advocacy Builder Value Proposition',
  subtitle: 'Shifting from Burn Rate to Value Delivered',
  keyPoints: [
    {
      title: 'Reusable Design Components',
      description: 'Creating scalable design assets that can be leveraged across the organization'
    },
    {
      title: 'Strategic Proof Points',
      description: 'Building compelling business cases with data-driven evidence'
    },
    {
      title: 'Persona-Aligned Solutions',
      description: 'Matching product recommendations to specific user needs and roles'
    },
    {
      title: 'Progressive Value Discovery',
      description: 'Surfacing relevant customer stories and benchmarks contextually'
    }
  ]
};
