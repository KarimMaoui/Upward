import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the
            security of your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, book a session, or contact us for support.
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Session preferences and goals</li>
              <li>Communication history</li>
              <li>Payment information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our coaching services</li>
              <li>Match you with appropriate coaches</li>
              <li>Process payments and manage your account</li>
              <li>Send you important updates and notifications</li>
              <li>Analyze usage patterns to improve our platform</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except as described in this policy or
              with your consent.
            </p>
            <p>We may share information with:</p>
            <ul>
              <li>Your assigned coaches (with your consent)</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our services and comply with legal obligations. You may
              request deletion of your data at any time.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your
              experience, analyze usage, and provide personalized content. You
              can control cookie settings through your browser.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              for such transfers.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              our website.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data
              practices, please contact us at privacy@upward.com
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

export default Privacy;
