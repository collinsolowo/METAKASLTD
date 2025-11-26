import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';

const openPositions = [
  {
    id: 1,
    title: 'Senior Electrical Engineer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Lead electrical engineering projects from design through commissioning for industrial clients.'
  },
  {
    id: 2,
    title: 'Project Manager',
    department: 'Operations',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    description: 'Manage complex engineering projects ensuring on-time, on-budget delivery with quality excellence.'
  },
  {
    id: 3,
    title: 'Instrumentation Technician',
    department: 'Technical Services',
    location: 'Port Harcourt, Nigeria',
    type: 'Full-time',
    description: 'Install, maintain, and troubleshoot instrumentation and control systems for oil and gas clients.'
  },
  {
    id: 4,
    title: 'Quality Control Inspector',
    department: 'Manufacturing',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Ensure product quality through rigorous testing and inspection of manufactured electrical equipment.'
  },
  {
    id: 5,
    title: 'Sales Engineer',
    department: 'Business Development',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'Develop client relationships and provide technical sales support for engineering solutions.'
  },
  {
    id: 6,
    title: 'Maintenance Supervisor',
    department: 'Field Services',
    location: 'Multiple Locations',
    type: 'Full-time',
    description: 'Supervise maintenance teams providing preventive and corrective maintenance for industrial facilities.'
  }
];

const benefits = [
  'Competitive salary packages',
  'Health insurance coverage',
  'Professional development opportunities',
  'Annual performance bonuses',
  'Paid vacation and holidays',
  'Retirement savings plan',
  'Life insurance',
  'Training and certifications'
];

export const Careers = () => {
  return (
    <div className="pt-20">
      <section
        className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Join Our <span className="text-metakas-accent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Build your career with Nigeria's leading engineering solutions provider
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Why Work at Metakas?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join a dynamic team working on cutting-edge engineering projects across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-metakas-light p-6 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <p className="text-metakas-primary font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div key={position.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-metakas-primary mb-2">
                          {position.title}
                        </h3>
                        <p className="text-metakas-accent font-medium text-sm">
                          {position.department}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaBriefcase className="text-white" />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-metakas-accent mr-2" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-metakas-accent mr-2" />
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <button className="w-full bg-metakas-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center group">
                      Apply Now
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@metakas.ng">
              <button className="bg-metakas-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Send Your CV
              </button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};
