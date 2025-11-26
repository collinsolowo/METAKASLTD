import { Container } from '../components/layout/Container';

export const Terms = () => {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-metakas-primary via-metakas-slate to-metakas-primary text-white">
        <Container>
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="max-w-4xl prose prose-lg">
            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using Metakas Limited's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Metakas Limited provides engineering, procurement, project management, maintenance, manufacturing, and manpower solutions. All services are subject to our standard terms and conditions as agreed upon in individual contracts.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content, designs, and materials provided by Metakas Limited remain our intellectual property unless otherwise specified in a written agreement.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Metakas Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, except as required by applicable law.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions regarding these Terms of Service, please contact us at:
              <br />
              Email: legal@metakas.ng
              <br />
              Phone: +234 123 456 7890
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};
