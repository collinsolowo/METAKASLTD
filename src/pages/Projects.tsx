import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { projects, sectors } from '../data/projects';

export const Projects = () => {
  const [selectedSector, setSelectedSector] = useState('All');

  const filteredProjects = selectedSector === 'All'
    ? projects
    : projects.filter(project => project.sector === selectedSector);

  return (
    <div className="pt-20">
      <section
        className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Our <span className="text-metakas-accent">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Delivering excellence across diverse industries and sectors
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="mb-12" data-aos="fade-up">
            <div className="flex flex-wrap gap-3 justify-center">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedSector === sector
                      ? 'bg-metakas-accent text-white shadow-lg'
                      : 'bg-metakas-light text-metakas-primary hover:bg-metakas-slate hover:text-white'
                    }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-metakas-primary to-metakas-slate"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-block self-start px-3 py-1 bg-metakas-accent text-white text-xs font-semibold rounded-full mb-3">
                      {project.sector}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-metakas-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-metakas-accent mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendar className="text-metakas-accent mr-2" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center text-metakas-accent font-semibold hover:text-metakas-teal transition-colors group"
                    >
                      View Details
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
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our proven expertise and comprehensive engineering solutions.
            </p>
            <Link to="/contact">
              <button className="bg-metakas-accent text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
