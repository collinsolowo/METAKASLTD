import { FaHandshake, FaAward, FaGlobe } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';

const partners = [
  { name: 'Schneider Electric', category: 'Power & Automation' },
  { name: 'Siemens', category: 'Industrial Automation' },
  { name: 'ABB', category: 'Electrical Equipment' },
  { name: 'General Electric', category: 'Power Systems' },
  { name: 'Honeywell', category: 'Control Systems' },
  { name: 'Mitsubishi Electric', category: 'Industrial Solutions' },
  { name: 'Eaton', category: 'Power Management' },
  { name: 'Rockwell Automation', category: 'Industrial Automation' }
];

export const Partners = () => {
  return (
    <div className="pt-20">
      <section
        className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Our <span className="text-metakas-accent">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Collaborating with world-class manufacturers and technology providers
            </p>
          </div>
        </Container>
      </section>


      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our partnerships with leading global manufacturers enable us to deliver cutting-edge solutions backed by world-class technology and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {partners.map((partner, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <Card className="h-full text-center">
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-metakas-light to-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-gray-200">
                      <FaHandshake className="text-metakas-accent text-3xl" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-metakas-primary mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {partner.category}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="0">
              <Card className="h-full text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaAward className="text-white text-2xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-3">
                    Authorized Distributor
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Official authorized distributor for major OEM brands, ensuring genuine products and full warranty support
                  </p>
                </div>
              </Card>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <Card className="h-full text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGlobe className="text-white text-2xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-3">
                    Global Network
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access to worldwide supply chains enabling rapid procurement and delivery of specialized equipment
                  </p>
                </div>
              </Card>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <Card className="h-full text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHandshake className="text-white text-2xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-3">
                    Technical Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Direct technical support from manufacturers and local expertise for installation and maintenance
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-6">
              Become a Partner
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Interested in partnering with Metakas? We're always looking to collaborate with innovative manufacturers and technology providers who share our commitment to excellence.
            </p>
            <a href="mailto:partnerships@metakas.ng">
              <button className="bg-metakas-accent text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact Partnership Team
              </button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};
