import { Link } from "react-router-dom";

const ServicesB2C = () => {
  const sessionDetails = [
    { label: "Duration", value: "60 minutes" },
    { label: "Price", value: "$150 per session" },
    { label: "Format", value: "1-on-1 virtual coaching" },
    { label: "Scheduling", value: "Flexible - book anytime" },
    { label: "Materials", value: "Included in session" },
    { label: "Follow-up", value: "30-day support" },
  ];

  const sessionFormats = [
    {
      title: "Public Speaking",
      description:
        "Master the art of delivering compelling presentations and speeches.",
      image: "/PublicSpeaking.jpg", // Image Format 1
    },
    {
      title: "Leadership Communication",
      description:
        "Develop executive presence and leadership communication skills.",
      image: "/Leadership.jpg", // Image Format 2
    },
  ];

  const coaches = [
    {
      name: "Coach 1",
      role: "Communication Expert",
      specialty: "Public Speaking & Presentation Skills",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Coach 2",
      role: "Leadership Coach",
      specialty: "Executive Communication & Team Leadership",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Coach 3",
      role: "Career Coach",
      specialty: "Interview Preparation ",
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services (B2C)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your personal communication skills with our expert
            one-on-one coaching sessions. Designed to help you speak with
            confidence and reach your full potential.
          </p>
        </div>
      </section>

      {/* Session Details Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Individual Coaching Sessions
              </h2>
              <div className="space-y-6">
                {sessionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="text-lg font-medium text-gray-700">
                      {detail.label}
                    </span>
                    <span className="text-lg text-gray-900">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/book-session" className="btn-primary">
                  Book Your Session
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
              <img 
                src="/Cours.jpg" 
                alt="Session Overview" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview of Session Formats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Overview of session formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessionFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-gray-200 rounded-lg h-48 mb-6 overflow-hidden">
                  <img 
                    src={format.image} 
                    alt={format.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {format.title}
                </h3>
                <p className="text-gray-600 mb-6">{format.description}</p>
                <Link to="/book-session" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Each session is tailored to your specific needs and goals. Whether
              you're preparing for a big presentation, improving your leadership
              skills, or building confidence, our expert coaches will guide you
              every step of the way.
            </p>
            <Link to="/session-formats" className="btn-primary">
              View All Formats
            </Link>
          </div>
        </div>
      </section>

      {/* Coach Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Consultants preview section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center mx-auto w-48">
                  <span className="text-gray-500 text-lg">
                    Consultant {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {coach.name}
                </h3>
                <p className="text-gray-600 mb-2">{coach.role}</p>
                <p className="text-sm text-gray-500 mb-4">{coach.specialty}</p>
                <Link to={`/coaches/${index + 1}`} className="btn-secondary">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our consultants are industry experts with years of experience in
              communication, leadership, and professional development. They're
              here to help you achieve your goals and unlock your full
              potential.
            </p>
            <Link to="/tutors" className="btn-primary">
              Meet All Consultants
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Learn Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to learn?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step towards transforming your communication skills.
            Book a session with one of our expert coaches today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-session" className="btn-primary">
              Book a Call
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesB2C;
