import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/forms/ContactForm';

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone',
    details: ['+234 123 456 7890', '+234 123 456 7891'],
    link: 'tel:+2341234567890'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    details: ['info@metakas.ng', 'sales@metakas.ng'],
    link: 'mailto:info@metakas.ng'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    details: ['Lagos, Nigeria', 'Multiple regional offices'],
    link: null
  }
];

export const Contact = () => {
  return (
    <div className="pt-20">
      <section
        className="relative hero-bg py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container>
          <div className="relative max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Get In <span className="text-metakas-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let's discuss how we can help bring your engineering project to life
            </p>
          </div>
        </Container>
      </section>


      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-full text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-metakas-accent to-metakas-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-metakas-primary mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-1">
                        {info.link ? (
                          <a href={info.link} className="hover:text-metakas-accent transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="font-heading font-bold text-4xl text-metakas-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Fill out the form below and our team will respond within 24 hours. For urgent matters, please call us directly.
              </p>
              <ContactForm />
            </div>

            <div data-aos="fade-left">
              <h2 className="font-heading font-bold text-4xl text-metakas-primary mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our main office is located in Lagos with regional offices across Nigeria. Schedule an appointment to discuss your project in person.
              </p>

              <div className="aspect-video bg-gradient-to-br from-metakas-primary to-metakas-slate rounded-lg mb-6"></div>

              <Card>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-metakas-primary mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#ff8a3d] mb-4">
              Find Us Easily
            </h2>
            <p className="text-gray-600 text-lg">
              Visit our office or reach out—we’re always ready to assist.
            </p>
          </div>

          {/* Map + Address Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Map */}
            <div
              className="w-full h-[350px] rounded-2xl shadow-lg overflow-hidden border-2 border-[#ff8a3d]/30"
              data-aos="fade-right"
            >
              <iframe
                title="Metakas Office Location"
                src="https://www.google.com/maps?q=28%20Alakuko%20Road,%20Opposite%20Mobil%20Filling%20Station,%20Ojokoro,%20Ifako-Ijaye,%20Lagos&output=embed"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Address Details */}
            <div data-aos="fade-left">
              <div className="p-8 rounded-2xl bg-[#fff7f2] border border-[#ff8a3d]/20 shadow">
                <h3 className="font-heading font-semibold text-2xl text-[#ff8a3d] mb-4">
                  Our Office Address
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  28 Alakuko Road, Opposite Mobil Filling Station, <br />
                  Ojokoro, Ifako-Ijaye, Lagos, Nigeria.
                </p>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28+Alakuko+Road,+Ojokoro,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#ff8a3d] text-white font-semibold rounded-xl shadow hover:bg-[#ff7a20] transition"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      <a
        href="https://wa.me/2341234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};
