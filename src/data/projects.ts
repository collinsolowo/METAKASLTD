export interface Project {
  id: string;
  title: string;
  slug: string;
  sector: string;
  client: string;
  year: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Industrial Power Distribution Upgrade',
    slug: 'power-distribution-upgrade',
    sector: 'Manufacturing',
    client: 'Major Manufacturing Plant',
    year: '2024',
    location: 'Lagos, Nigeria',
    description: 'Complete overhaul of power distribution infrastructure for a 50,000 sqm manufacturing facility.',
    challenge: 'The existing power distribution system was outdated, causing frequent outages and safety concerns. The facility required 24/7 uptime for critical production lines.',
    solution: 'Designed and installed a modern, redundant power distribution system with smart monitoring, automated failover, and predictive maintenance capabilities.',
    result: 'Zero unplanned downtime in 12 months post-installation, 30% reduction in energy costs, and improved safety compliance ratings.',
    images: [],
    testimonial: {
      quote: 'Metakas delivered a world-class solution that transformed our operations. Their technical expertise and project management were exceptional.',
      author: 'Oluwaseun Adebayo',
      position: 'Operations Director'
    }
  },
  {
    id: '2',
    title: 'Oil & Gas Facility Maintenance Contract',
    slug: 'oil-gas-maintenance',
    sector: 'Oil & Gas',
    client: 'Leading Energy Corporation',
    year: '2023-2024',
    location: 'Port Harcourt, Nigeria',
    description: 'Comprehensive maintenance services for upstream oil and gas processing facilities.',
    challenge: 'Client needed a reliable maintenance partner to ensure continuous operation of critical equipment in a harsh offshore environment.',
    solution: 'Deployed specialized maintenance teams with 24/7 coverage, implemented predictive maintenance using sensor technology, and maintained critical spare parts inventory.',
    result: '99.2% equipment availability, 40% reduction in maintenance costs, and improved safety record with zero lost-time incidents.',
    images: []
  },
  {
    id: '3',
    title: 'Commercial Building Electrical Systems',
    slug: 'commercial-electrical',
    sector: 'Commercial',
    client: 'Premium Office Complex',
    year: '2023',
    location: 'Abuja, Nigeria',
    description: 'Design and installation of complete electrical infrastructure for a 20-story office building.',
    challenge: 'Client required energy-efficient, future-proof electrical systems meeting international green building standards.',
    solution: 'Implemented intelligent building management system, LED lighting with daylight harvesting, solar integration, and advanced fire safety systems.',
    result: 'LEED Silver certification achieved, 45% energy savings vs. conventional systems, and enhanced occupant comfort and safety.',
    images: []
  },
  {
    id: '4',
    title: 'Transformer Manufacturing & Supply',
    slug: 'transformer-manufacturing',
    sector: 'Power Utilities',
    client: 'Regional Electricity Distribution Company',
    year: '2024',
    location: 'Multiple Sites, Nigeria',
    description: 'Manufacture and supply of 50 distribution transformers (500kVA - 2MVA) for grid expansion project.',
    challenge: 'Client needed high-quality transformers delivered on aggressive timeline to meet grid expansion deadlines.',
    solution: 'Leveraged in-house manufacturing capabilities and established quality processes to produce and deliver transformers in batches, with full testing and certification.',
    result: 'All units delivered on schedule, 100% first-time acceptance rate, and ongoing maintenance support contract awarded.',
    images: []
  },
  {
    id: '5',
    title: 'Factory Automation & Control Systems',
    slug: 'factory-automation',
    sector: 'Manufacturing',
    client: 'Food Processing Industry',
    year: '2023',
    location: 'Lagos, Nigeria',
    description: 'Implementation of automated production line control systems with SCADA integration.',
    challenge: 'Manual production processes were causing inefficiencies, quality inconsistencies, and high labor costs.',
    solution: 'Designed and installed PLC-based control systems, SCADA monitoring, automated quality control checkpoints, and real-time production tracking.',
    result: '60% increase in production throughput, 35% reduction in waste, and improved product consistency meeting export standards.',
    images: []
  },
  {
    id: '6',
    title: 'Hospital Emergency Power Systems',
    slug: 'hospital-power-systems',
    sector: 'Healthcare',
    client: 'Private Hospital Group',
    year: '2024',
    location: 'Lagos, Nigeria',
    description: 'Installation of critical backup power systems for multi-facility healthcare provider.',
    challenge: 'Hospitals required uninterrupted power supply for critical care units, operating theaters, and medical equipment with zero tolerance for failure.',
    solution: 'Installed N+1 redundant generator systems, UPS with battery backup, automatic transfer switches, and remote monitoring with 24/7 technical support.',
    result: 'Zero power interruptions to critical systems, 100% compliance with healthcare regulations, and client confidence for facility expansion.',
    images: []
  }
];

export const sectors = [
  'All',
  'Manufacturing',
  'Oil & Gas',
  'Commercial',
  'Power Utilities',
  'Healthcare'
];
