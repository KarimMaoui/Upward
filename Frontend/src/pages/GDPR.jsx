import { Link } from "react-router-dom";

const GDPR = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            GDPR and Other Legal Mentions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Information about our compliance with data protection regulations
            and other legal requirements.
          </p>
        </div>
      </section>

      {/* GDPR Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>GDPR Compliance</h2>
            <p>
              The General Data Protection Regulation (GDPR) is a comprehensive
              data protection law that applies to organizations operating within
              the European Union. Upward is committed to full compliance with
              GDPR requirements.
            </p>

            <h3>Your Rights Under GDPR</h3>
            <p>As a data subject, you have the following rights:</p>
            <ul>
              <li>
                <strong>Right of Access:</strong> You can request a copy of your
                personal data
              </li>
              <li>
                <strong>Right to Rectification:</strong> You can request
                correction of inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> You can request deletion of
                your personal data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> You can limit how
                we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You can receive your
                data in a structured format
              </li>
              <li>
                <strong>Right to Object:</strong> You can object to certain
                types of processing
              </li>
              <li>
                <strong>Rights Related to Automated Decision Making:</strong>{" "}
                You have rights regarding automated processing
              </li>
            </ul>

            <h3>Legal Basis for Processing</h3>
            <p>
              We process your personal data based on the following legal
              grounds:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> When you explicitly agree to data
                processing
              </li>
              <li>
                <strong>Contract Performance:</strong> To provide our coaching
                services
              </li>
              <li>
                <strong>Legitimate Interest:</strong> To improve our services
                and prevent fraud
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with applicable
                laws
              </li>
            </ul>

            <h3>Data Transfers</h3>
            <p>
              When we transfer your data outside the European Economic Area
              (EEA), we ensure appropriate safeguards are in place, such as:
            </p>
            <ul>
              <li>Adequacy decisions by the European Commission</li>
              <li>Standard contractual clauses</li>
              <li>Binding corporate rules</li>
              <li>Other approved transfer mechanisms</li>
            </ul>

            <h2>Other Legal Mentions</h2>

            <h3>Intellectual Property Rights</h3>
            <p>
              All content, trademarks, and intellectual property on this website
              are owned by Upward or our licensors. Reproduction without
              permission is prohibited.
            </p>

            <h3>Disclaimers</h3>
            <p>
              While we strive to provide accurate and helpful information, our
              coaching services are educational in nature and do not constitute
              professional advice. Results may vary based on individual
              circumstances and commitment.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              Upward's liability is limited to the amount paid for our services.
              We are not liable for indirect, incidental, or consequential
              damages.
            </p>

            <h3>Governing Law</h3>
            <p>
              These terms are governed by the laws of [Jurisdiction]. Any
              disputes will be resolved in the courts of [Jurisdiction].
            </p>

            <h3>Contact Information</h3>
            <p>
              For GDPR-related inquiries or to exercise your rights, please
              contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> dpo@upward.com
              </p>
              <p>
                <strong>Address:</strong> [Company Address]
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>

            <h3>Supervisory Authority</h3>
            <p>
              You have the right to lodge a complaint with your local data
              protection supervisory authority if you believe we have not
              addressed your concerns adequately.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> May 1, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GDPR;
