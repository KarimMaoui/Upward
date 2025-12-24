import { useEffect } from "react"; // 1. On importe useEffect
import { Link } from "react-router-dom";

const Terms = () => {
  // 2. On force le haut de page quand on arrive sur Terms
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-sm leading-snug max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Upward platform and services, you
              accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Upward provides communication coaching and training services
              through various formats including one-on-one sessions, group
              workshops, and online courses.
            </p>

            <h2>3. User Responsibilities</h2>
            <ul>
              <li>
                Provide accurate and complete information during registration
              </li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>
                Respect the intellectual property rights of Upward and other
                users
              </li>
            </ul>

            <h2>4. Payment Terms</h2>
            <p>
              All fees are payable in advance. Payment is processed securely
              through our payment partners. Refunds are subject to our refund
              policy as outlined in your service agreement.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> May 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          {/* 3. On ajoute onClick pour forcer le scroll en haut lors du retour Home */}
          <Link 
            to="/" 
            className="btn-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
