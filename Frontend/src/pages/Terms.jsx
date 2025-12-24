import { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  // 1. Force le haut de page quand on arrive sur Terms
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            General Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms defining the rules for using Upward's services.
            These terms are governed by French law.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose prose-sm leading-snug max-w-none text-gray-700">
            
            {/* 1. MENTIONS LÉGALES (Personnalisées) */}
            <h2>1. Legal Notice (Mentions Légales)</h2>
            <p>
              In accordance with the French law "Confiance dans l'Économie Numérique" (LCEN), 
              the following information is provided regarding the operator of this website:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Company Name:</strong> Upward</li>
              <li><strong>Headquarters:</strong> 42 rue Hansi, 68270 Wittenheim, France</li>
              <li><strong>SIRET Number:</strong> 943 554 139 00015</li>
              <li><strong>VAT Number:</strong> TVA non applicable, art. 293 B du CGI</li>
              <li><strong>Email:</strong> upwardlearn@gmail.com</li>
              <li><strong>Publication Director:</strong> Karim MAOUI</li>
              <li>
                <strong>Hosting Provider:</strong> Zoho Corporation
                <br />
                <span className="text-xs text-gray-500">
                  (Address: Beneluxlaan 4B, 3527 HT Utrecht, The Netherlands)
                </span>
              </li>
            </ul>

            <h2>2. Scope of Application</h2>
            <p>
              These General Terms and Conditions of Sale (GTCS) apply, without restriction or reservation, 
              to all sales concluded by Upward regarding the coaching and training services offered on the website. 
              By booking a session, the Client confirms their full acceptance of these terms.
            </p>

            <h2>3. Services & Booking</h2>
            <p>
              Upward provides language coaching and professional communication training. 
              Services are described on the website.
            </p>
            <p>
              <strong>Booking Process:</strong> The contract is formed when the Client validates the order 
              and proceeds with payment or booking confirmation. Upward reserves the right to refuse 
              an order for legitimate reasons (e.g., unavailability of the coach).
            </p>

            <h2>4. Pricing and Payment</h2>
            <p>
              Prices are indicated in Euros (€). Payment is due immediately upon booking via our secure payment processors. 
              An invoice will be issued upon request.
            </p>

            {/* 5. DROIT DE RÉTRACTATION (Code de la consommation) */}
            <h2>5. Right of Withdrawal (Droit de Rétractation)</h2>
            <p>
              <strong>For B2C Clients (Consumers):</strong> Under Article L.221-18 of the French Consumer Code, 
              you have a 14-day right of withdrawal from the day the contract is concluded.
            </p>
            <p>
              <strong>Exception:</strong> By booking a coaching session that takes place before the end 
              of this 14-day period, you expressly waive your right of withdrawal in order to benefit 
              from the service immediately (Article L.221-28).
            </p>
            <p>
              To exercise this right (if applicable), please contact us at upwardlearn@gmail.com.
            </p>

            <h2>6. Cancellation and Rescheduling Policy</h2>
            <p>
              Any session cancelled by the Client less than 24 hours before the scheduled time 
              is due in full and will not be refunded. Sessions may be rescheduled free of charge 
              if the request is made more than 24 hours in advance.
            </p>

            <h2>7. Liability</h2>
            <p>
              Upward is bound by an obligation of means (*obligation de moyens*), not results. 
              While we strive to provide the highest quality coaching, we cannot guarantee specific 
              professional outcomes. Our liability is limited to the amount paid for the service.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on the Upward website and training materials provided during sessions 
              remain the exclusive property of Upward. Reproduction or distribution without permission 
              is strictly prohibited.
            </p>

            <h2>9. Personal Data (GDPR)</h2>
            <p>
              In compliance with the General Data Protection Regulation (GDPR), your personal data 
              is processed solely for managing your orders and improving our services. 
              You have the right to access, rectify, and delete your data by contacting us.
            </p>

            <h2>10. Disputes and Applicable Law</h2>
            <p>
              These terms are governed by French law. In the event of a dispute, an amicable solution 
              will be sought first.
            </p>
            <p>
              <strong>Consumer Mediation:</strong> In accordance with Article L.612-1 of the Consumer Code, 
              you may refer to a consumer mediator free of charge for the amicable resolution of a dispute.
            </p>
            <p>
              In the absence of an amicable agreement, the French courts shall have exclusive jurisdiction.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Last updated:</strong> May 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <Link 
            to="/" 
            className="btn-primary"
            onClick={() => window.scrollTo(0, 0)} // Scroll vers le haut au clic
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Terms;
