import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { services } from '../data/services';

export const Services = () => {
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
              Our <span className="text-metakas-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive engineering solutions designed to meet your most demanding requirements
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-lg flex items-center justify-center mb-6 shadow-lg">
                      <i className={`fas ${service.icon} text-white text-3xl`}></i>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-metakas-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-metakas-accent font-semibold hover:text-metakas-teal transition-colors group"
                    >
                      Learn More
                      <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every project is unique. Our team works closely with you to design and deliver engineering solutions tailored to your specific requirements, timeline, and budget.
            </p>
            <Link to="/contact">
              <button className="bg-metakas-accent text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
