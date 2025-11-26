import { useParams, Link, Navigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-metakas-primary via-metakas-slate to-metakas-primary text-white">
        <Container>
          <div className="mb-6" data-aos="fade-right">
            <Link to="/services" className="inline-flex items-center text-gray-300 hover:text-metakas-accent transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to Services
            </Link>
          </div>
          <div className="max-w-4xl" data-aos="fade-up">
            <div className="w-20 h-20 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <i className={`fas ${service.icon} text-white text-3xl`}></i>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div data-aos="fade-up">
                <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-6">
                  Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <h3 className="font-heading font-bold text-2xl text-metakas-primary mb-6">
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3" data-aos="fade-right" data-aos-delay={index * 50}>
                      <FaCheckCircle className="text-metakas-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-metakas-light p-8 rounded-lg" data-aos="fade-up">
                  <h3 className="font-heading font-bold text-2xl text-metakas-primary mb-4">
                    Why Choose Metakas?
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-metakas-accent mr-3">•</span>
                      <span>Proven track record with over 500 successful projects delivered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-metakas-accent mr-3">•</span>
                      <span>Team of certified engineers and experienced technicians</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-metakas-accent mr-3">•</span>
                      <span>ISO-certified quality management systems and processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-metakas-accent mr-3">•</span>
                      <span>24/7 technical support and emergency response capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-metakas-primary text-white p-8 rounded-lg sticky top-24" data-aos="fade-left">
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Get Started Today
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ready to discuss your {service.title.toLowerCase()} needs? Our team is here to provide expert consultation and tailored solutions.
                </p>
                <Link to="/contact" className="block mb-4">
                  <Button size="lg" className="w-full justify-center" icon={<FaArrowRight />}>
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/projects">
                  <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-metakas-primary transition-all duration-300">
                    View Related Projects
                  </button>
                </Link>

                <div className="mt-8 pt-8 border-t border-metakas-slate">
                  <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>
                      <strong className="text-white">Phone:</strong><br />
                      +234 123 456 7890
                    </p>
                    <p>
                      <strong className="text-white">Email:</strong><br />
                      info@metakas.ng
                    </p>
                    <p>
                      <strong className="text-white">Location:</strong><br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
