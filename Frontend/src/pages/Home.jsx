import { Link } from "react-router-dom";

const Home = () => {
  const whyUpwardFeatures = [
    {
      title: "Elite Coaches",
      description: "Learn from Ivy League & top schools",
      icon: (
        <img src="/dart.png" alt="dart" className="w-16 h-16 inline-block" />
      ),
    },
    {
      title: "Flexible Format",
      description: "Short, impactful session tailored to work schedules",
      icon: (
        <img
          src="/adaptability.png"
          alt="adaptability"
          className="w-16 h-16 inline-block"
        />
      ),
    },
    {
      title: "Strategic Edge",
      description: "Learn language and global business communication",
      icon: (
        <img
          src="/business.png"
          alt="business"
          className="w-16 h-16 inline-block"
        />
      ),
    },
  ];

  const testimonials = [
    { name: "Client 1", role: "Marketing Director", company: "TechCorp" },
    {
      name: "Client 2",
      role: "Sales Manager",
      company: "Global Solutions",
    },
    { name: "Client 3", role: "Team Lead", company: "Innovation Labs" },
  ];

  const journeyOptions = [
    {
      title: "B2B",
      description: "Description of B2B services we have.",
      image: "/B2B.jpeg", // Image Journey 1
    },
    {
      title: "B2C",
      description: "Description of B2C services we have.",
      image: "/B2C.jpeg", // Image Journey 2
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
            Master confident communication. Designed for global professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-session" className="btn-primary">
              START YOUR JOURNEY
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              PROCESS
            </Link>
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
      {/* Choose Your Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Choose Your Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journeyOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-lg h-64 mb-6 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title} 
                    className="w-full h-full object-cover" 
                  />
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
