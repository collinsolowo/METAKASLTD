export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  fullDescription: string;
  features: string[];
  image?: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Engineering Solutions',
    slug: 'engineering-solutions',
    icon: 'fa-gears',
    description: 'Comprehensive engineering design and implementation services for industrial and commercial projects.',
    fullDescription: 'Our engineering solutions encompass electrical, mechanical, and civil engineering services tailored to meet the demands of modern industrial operations. We provide end-to-end engineering support from concept to commissioning.',
    features: [
      'Electrical system design and installation',
      'Mechanical engineering services',
      'Structural and civil engineering',
      'Process engineering and optimization',
      'Control systems and automation',
      'Energy efficiency consulting'
    ]
  },
  {
    id: '2',
    title: 'Procurement Services',
    slug: 'procurement',
    icon: 'fa-box',
    description: 'Strategic procurement and supply chain management for industrial equipment and materials.',
    fullDescription: 'Metakas offers comprehensive procurement services, leveraging our extensive network of OEM partners and suppliers to deliver quality equipment and materials on time and within budget.',
    features: [
      'Equipment sourcing and procurement',
      'Vendor management and evaluation',
      'Supply chain optimization',
      'Quality assurance and inspection',
      'Logistics and delivery coordination',
      'Inventory management solutions'
    ]
  },
  {
    id: '3',
    title: 'Project Management',
    slug: 'project-management',
    icon: 'fa-diagram-project',
    description: 'Expert project management ensuring on-time delivery and budget compliance for complex industrial projects.',
    fullDescription: 'Our project management team brings decades of combined experience in delivering complex industrial projects across various sectors. We employ proven methodologies to ensure success.',
    features: [
      'Project planning and scheduling',
      'Budget management and cost control',
      'Risk assessment and mitigation',
      'Stakeholder communication',
      'Quality control and assurance',
      'Post-project evaluation and support'
    ]
  },
  {
    id: '4',
    title: 'Maintenance Services',
    slug: 'maintenance',
    icon: 'fa-wrench',
    description: 'Preventive and corrective maintenance services to maximize equipment uptime and operational efficiency.',
    fullDescription: 'Our maintenance services are designed to minimize downtime and extend the operational life of your critical equipment through scheduled preventive maintenance and rapid response corrective maintenance.',
    features: [
      'Preventive maintenance programs',
      'Emergency breakdown support',
      'Equipment overhaul and refurbishment',
      'Spare parts management',
      'Predictive maintenance using IoT',
      'Maintenance training programs'
    ]
  },
  {
    id: '5',
    title: 'Manufacturing',
    slug: 'manufacturing',
    icon: 'fa-industry',
    description: 'Custom manufacturing of electrical panels, transformers, and industrial equipment to exact specifications.',
    fullDescription: 'Metakas operates state-of-the-art manufacturing facilities producing high-quality electrical panels, distribution boards, transformers, and custom industrial equipment certified to international standards.',
    features: [
      'Control and distribution panels',
      'Transformer manufacturing',
      'Switchgear assembly',
      'Custom fabrication services',
      'Testing and quality certification',
      'After-sales technical support'
    ]
  },
  {
    id: '6',
    title: 'Manpower Solutions',
    slug: 'manpower',
    icon: 'fa-users',
    description: 'Skilled technical personnel and workforce solutions for industrial operations and projects.',
    fullDescription: 'We provide qualified technical personnel including engineers, technicians, and skilled tradespeople for short-term projects or long-term operational support.',
    features: [
      'Technical staff outsourcing',
      'Project-based manpower supply',
      'Skills assessment and training',
      'Safety and compliance management',
      'Payroll and HR administration',
      'Performance monitoring and evaluation'
    ]
  }
];
