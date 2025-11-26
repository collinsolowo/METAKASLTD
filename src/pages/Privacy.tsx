import { Container } from '../components/layout/Container';

export const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-metakas-primary via-metakas-slate to-metakas-primary text-white">
        <Container>
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Privacy Policy
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
            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Metakas Limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our services.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Respond to inquiries and provide customer service</li>
              <li>Deliver our engineering services</li>
              <li>Send project updates and communications</li>
              <li>Improve our services and website</li>
            </ul>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
            </p>

            <h2 className="font-heading font-bold text-3xl text-metakas-primary mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@metakas.ng
              <br />
              Phone: +234 123 456 7890
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};
