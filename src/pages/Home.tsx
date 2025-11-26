import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaCogs, FaUsers, FaAward } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatCounter } from '../components/ui/StatCounter';
import { services } from '../data/services';

export const Home = () => {
  return (
    <div className="pt-20">
      <style>
        {`
  @keyframes bounceMarquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`}
      </style>

      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-metakas-primary via-metakas-slate to-metakas-primary overflow-hidden">

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT SIDE */}
            <div className="max-w-4xl" data-aos="fade-right">
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Engineering Solutions for <span className="text-metakas-accent">Sustainable Progress</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Delivering excellence in engineering, procurement, and project management across Nigeria's industrial landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" icon={<FaArrowRight />}>
                    Get A Free Quote
                  </Button>
                </Link>

                <Link to="/projects">
                  <Button size="lg" variant="outlined">
                    View Our Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* VIDEO SIDE */}
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">

                {/* 🔥 MOVING MARQUEE ON TOP OF VIDEO */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    background: "#ffb300",
                    padding: "7px 0",
                    fontWeight: "900",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    zIndex: 20,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      animation: "bounceMarquee 11s ease-in-out infinite alternate",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    METAKAS NIGERIA LIMITED —{" "}
                    <span style={{ color: "red", fontWeight: "900" }}>
                      RC 1580459
                    </span>
                  </span>
                </div>

                {/* VIDEO */}
                <video
                  src="https://video.wixstatic.com/video/b69019_417a64d579bb4a9d8675b7480b155948/1080p/mp4/file.mp4"
                  controls
                  className="w-full h-80 md:h-96 lg:h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </Container>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>


      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to meet the demands of modern industrial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-lg flex items-center justify-center mb-4 shadow-lg">
                      <i className={`fas ${service.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-metakas-accent font-medium hover:text-metakas-teal transition-colors"
                    >
                      Learn More <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-primary text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="0">
              <StatCounter end={25} suffix="+" />
              <p className="text-gray-300 mt-2 text-lg">Years Experience</p>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <StatCounter end={500} suffix="+" />
              <p className="text-gray-300 mt-2 text-lg">Projects Completed</p>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <StatCounter end={200} suffix="+" />
              <p className="text-gray-300 mt-2 text-lg">Happy Clients</p>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <StatCounter end={150} suffix="+" />
              <p className="text-gray-300 mt-2 text-lg">Team Members</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-metakas-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-metakas-primary mb-6">
                Why Choose Metakas?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over two decades of experience, we've established ourselves as a trusted partner for industrial and commercial projects across Nigeria.
              </p>

              <div className="space-y-4">
                {[
                  { icon: FaCheckCircle, text: 'Certified and experienced engineering team' },
                  { icon: FaCogs, text: 'State-of-the-art manufacturing facilities' },
                  { icon: FaUsers, text: 'Dedicated project management support' },
                  { icon: FaAward, text: 'ISO certified quality management systems' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-metakas-accent rounded-lg flex items-center justify-center">
                        <item.icon className="text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="aspect-square bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-metakas-accent to-metakas-teal text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our team today for a free consultation and discover how we can bring your vision to life.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" icon={<FaArrowRight />}>
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
