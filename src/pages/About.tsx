import { FaCheckCircle, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';

const leadership = [
  {
    name: 'Adebayo Okonkwo',
    position: 'Chief Executive Officer',
    bio: 'Over 25 years of experience in industrial engineering and business development across Nigeria.'
  },
  {
    name: 'Ngozi Amadi',
    position: 'Chief Operations Officer',
    bio: 'Expert in project management and operational excellence with multinational engineering firms.'
  },
  {
    name: 'Chukwuma Nwosu',
    position: 'Chief Technical Officer',
    bio: 'Leading technical innovation with extensive experience in power systems and automation.'
  },
  {
    name: 'Fatima Bello',
    position: 'Head of Quality & Compliance',
    bio: 'Ensuring world-class quality standards and regulatory compliance across all operations.'
  }
];

const values = [
  {
    icon: FaCheckCircle,
    title: 'Excellence',
    description: 'We pursue the highest standards in every project, delivering solutions that exceed expectations.'
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    description: 'Trust and transparency form the foundation of our relationships with clients and partners.'
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and methodologies to provide cutting-edge engineering solutions.'
  },
  {
    icon: FaAward,
    title: 'Quality',
    description: 'Our ISO-certified processes ensure consistent delivery of high-quality outcomes.'
  }
];

const milestones = [
  { year: '1999', event: 'Company founded in Lagos, Nigeria' },
  { year: '2005', event: 'ISO 9001 certification achieved' },
  { year: '2010', event: 'Expanded to manufacturing with panel production facility' },
  { year: '2015', event: 'Reached milestone of 300 completed projects' },
  { year: '2020', event: 'Established regional offices across Nigeria' },
  { year: '2024', event: 'Celebrating 25 years of engineering excellence' }
];

export const About = () => {
  return (
    <div className="pt-20 page">

      <section className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              About <span className="text-metakas-accent">Metakas Limited</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Engineering Solutions for Sustainable Progress
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="font-heading font-bold text-4xl text-metakas-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1999, Metakas Limited has grown from a small engineering consultancy to one of Nigeria's most trusted engineering solutions providers. Our journey has been marked by unwavering commitment to excellence, innovation, and client satisfaction.
                </p>
                <p>
                  Over the past 25 years, we have successfully delivered more than 500 projects across diverse sectors including manufacturing, oil and gas, power utilities, commercial real estate, and healthcare. Our reputation is built on technical expertise, reliable execution, and long-term partnerships.
                </p>
                <p>
                  Today, Metakas operates with a team of over 150 professionals including licensed engineers, certified project managers, skilled technicians, and administrative staff. Our state-of-the-art manufacturing facility produces high-quality electrical panels, transformers, and switchgear meeting international standards.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="aspect-video bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <value.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experienced professionals driving Metakas forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full text-center">
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-full mx-auto mb-4"></div>
                    <h3 className="font-heading font-semibold text-lg text-metakas-primary mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-metakas-accent font-medium text-sm mb-3">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-primary text-white">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Key milestones in Metakas's evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-metakas-accent"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'text-right pr-12 lg:pr-1/2' : 'text-left pl-12 lg:pl-1/2 lg:ml-auto'
                  }`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-metakas-accent rounded-full border-4 border-metakas-primary"></div>

                  <div
                    className={`inline-block bg-metakas-slate p-6 rounded-lg shadow-xl max-w-md ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="font-heading font-bold text-2xl text-metakas-accent mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-6">
              Certifications & Accreditations
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Our commitment to quality is validated by international certifications and partnerships with leading OEMs
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001', 'COREN Certified'].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaAward className="text-white text-2xl" />
                  </div>
                  <p className="font-heading font-semibold text-metakas-primary">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
