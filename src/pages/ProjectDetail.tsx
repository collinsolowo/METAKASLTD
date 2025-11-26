import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendar, FaBuilding, FaQuoteLeft } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { projects } from '../data/projects';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-metakas-primary via-metakas-slate to-metakas-primary text-white">
        <Container>
          <div className="mb-6" data-aos="fade-right">
            <Link to="/projects" className="inline-flex items-center text-gray-300 hover:text-metakas-accent transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </div>
          <div className="max-w-4xl" data-aos="fade-up">
            <div className="inline-block px-4 py-2 bg-metakas-accent text-white text-sm font-semibold rounded-full mb-6">
              {project.sector}
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <FaBuilding className="text-metakas-accent mr-2" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-metakas-accent mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="text-metakas-accent mr-2" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-lg mb-12" data-aos="fade-up"></div>

              <div className="space-y-12">
                <div data-aos="fade-up">
                  <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">
                    Project Overview
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div data-aos="fade-up">
                  <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">
                    The Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div data-aos="fade-up">
                  <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">
                    Our Solution
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div data-aos="fade-up">
                  <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">
                    Results & Impact
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.result}
                  </p>
                  {project.testimonial && (
                    <div className="bg-metakas-light p-8 rounded-lg border-l-4 border-metakas-accent">
                      <FaQuoteLeft className="text-metakas-accent text-3xl mb-4" />
                      <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                        "{project.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold text-metakas-primary">
                          {project.testimonial.author}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {project.testimonial.position}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-metakas-primary text-white p-8 rounded-lg sticky top-24" data-aos="fade-left">
                <h3 className="font-heading font-bold text-2xl mb-6">
                  Project Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Client</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Sector</p>
                    <p className="font-semibold">{project.sector}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Year</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-metakas-slate">
                  <h4 className="font-semibold text-lg mb-4">Interested in Similar Solutions?</h4>
                  <Link to="/contact">
                    <button className="w-full bg-metakas-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 mb-3">
                      Request a Consultation
                    </button>
                  </Link>
                  <Link to="/projects">
                    <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-metakas-primary transition-all duration-300">
                      View More Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
