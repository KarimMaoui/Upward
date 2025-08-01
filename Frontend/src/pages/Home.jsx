import { Link } from "react-router-dom";

const Home = () => {
  const whyUpwardFeatures = [
    {
      title: "Expert Coaches",
      description:
        "Learn from industry professionals with proven track records in communication and leadership.",
      icon: "🎯",
    },
    {
      title: "Personalized Approach",
      description:
        "Tailored coaching sessions designed to meet your specific goals and learning style.",
      icon: "✨",
    },
    {
      title: "Proven Results",
      description:
        "Join thousands of successful professionals who have transformed their communication skills.",
      icon: "📈",
    },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Marketing Director", company: "TechCorp" },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      company: "Global Solutions",
    },
    { name: "Emily Rodriguez", role: "Team Lead", company: "Innovation Labs" },
  ];

  const journeyOptions = [
    {
      title: "Individual Coaching",
      description:
        "One-on-one sessions focused on your personal development and communication goals.",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Team Training",
      description:
        "Group sessions designed to improve team communication and collaboration skills.",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Speak Better. Reach Higher.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your communication skills with expert coaching from
            industry professionals. Whether you're looking to improve public
            speaking, leadership, or team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-session" className="btn-primary">
              Book a Session
            </Link>
            <Link to="/services-b2c" className="btn-secondary">
              Register
            </Link>
          </div>
          <div className="mt-12">
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Hero Image/Video Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Upward Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Upward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUpwardFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Hear what others say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-sm"
                  >
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/testimonials" className="btn-secondary">
                  Other stories
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Testimonial Quote/Image
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Choose Your Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journeyOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Journey Image {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Link to="/services-b2c" className="btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Learn Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to learn?</h2>
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

export default Home;
