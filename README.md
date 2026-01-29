# VibeCoding-Projects

## Advocacy Builder - Project Roadmap & Strategic Plan

An interactive project roadmap and work breakdown structure for the Workday Advocacy Builder product.

### Features

- **Project Overview**: Strategic context with value propositions, core capabilities, and proof point categories
- **Interactive Roadmap**: Phase-based visualization with expandable artifacts, deliverables, and stakeholder tracking
- **Work Breakdown Structure**: Organized workstream buckets with effort/priority indicators
- **Action Items Tracker**: VML action items and stakeholder directory

### Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with Workday brand colors
- **shadcn/ui** inspired components
- **motion.dev** for smooth animations

### Workday Brand Colors

- **Orange**: `#f4990b` (Primary accent)
- **Blue**: `#2c69b6` (Primary brand)
- **Navy**: `#0d2240` (Headers)
- **Teal**: `#00857c` (Secondary accent)

### Getting Started

```bash
cd advocacy-builder-roadmap
npm install
npm run dev
```

### Project Structure

```
advocacy-builder-roadmap/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn-style UI components
│   │   ├── Header.tsx
│   │   ├── ProjectOverview.tsx
│   │   ├── RoadmapVisualization.tsx
│   │   ├── WorkBreakdownStructure.tsx
│   │   └── ActionItemsTracker.tsx
│   ├── data/
│   │   └── projectData.ts  # All project data and types
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

### Links

- [Advocacy Builder Prototype](https://workday-cio-advocacy-builder.vercel.app)
- [Miro Board](https://miro.com/app/board/uXjVJU_2D5w=/)
