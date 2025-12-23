import { useState } from "react";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

const ServicesB2B = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  const [selectedDate, setSelectedDate] = useState(null);

  const courseFormats = [
    "In-person workshops",
    "Virtual training sessions",
    "Hybrid learning programs",
    "Custom corporate packages",
    "Leadership development programs",
    "Team communication training",
  ];

  const useCases = [
    {
      title: "Executive Communication",
      description:
        "Help senior leaders improve their presentation skills and executive presence.",
    },
    {
      title: "Sales Team Training",
      description:
        "Enhance sales team communication and negotiation skills for better results.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services (B2B)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your organization's communication culture with our
            comprehensive B2B training and coaching solutions.
          </p>
        </div>
      </section>

      {/* Course Formats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Course formats & delivery methods
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {courseFormats.map((format, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div>
                    <span className="text-lg text-gray-700">
                      {format}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-gray-600 mb-6">
                  Our flexible delivery methods ensure that your team can access
                  high-quality communication training regardless of location or
                  schedule constraints.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get Custom Quote
                </Link>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Course Formats Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Real use cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <span className="text-gray-500">
                    Use Case {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/case-studies" className="btn-secondary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Book a call with us today
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Schedule Your Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Book a free 30-minute consultation to discuss your organization’s
                needs and goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span className="text-gray-700">
                    Free 30-minute consultation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span className="text-gray-700">
                    Customized proposal
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4" />
                  <span className="text-gray-700">
                    No commitment required
                  </span>
                </div>
              </div>
            </div>

            {/* SAFE CALENDLY */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  Book a time directly via our calendar
                </h4>
              </div>

              <div className="h-[800px]">
                {typeof calendlyUrl === "string" &&
                calendlyUrl.trim().length > 0 &&
                calendlyUrl.startsWith("http") ? (
                  <InlineWidget
                    url={calendlyUrl}
                    styles={{ height: "100%" }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-center">
                    <p className="text-gray-500">
                      Calendar temporarily unavailable.<br />
                      Please contact us directly.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesB2B;

