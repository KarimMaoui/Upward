import { Link } from "react-router-dom";

const HowItWorks = () => {
  const onboardingSteps = [
    {
      step: 1,
      title: "Assessment & Goal Setting",
      description:
        "Complete a comprehensive assessment to identify your communication strengths and areas for improvement. Together, we will set clear, achievable goals for your development.",
    },
    {
      step: 2,
      title: "Coach Matching",
      description:
        "Based on your assessment results and goals, we will match you with the perfect coach who specializes in your specific needs and learning style.",
    },
    {
      step: 3,
      title: "Begin Your Journey",
      description:
        "Start your personalized coaching sessions with regular check-ins, progress tracking, and continuous support to ensure you achieve your communication goals.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How Upward works?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our proven 3-step process ensures you get the most out of your
            coaching experience and achieve lasting results in your
            communication skills.
          </p>
          <Link to="/book-session" className="btn-primary">
            Book a Session
          </Link>
          <div className="mt-12">
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">How It Works Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Steps Onboarding Flow Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            3-steps onboarding flow
          </h2>
          <div className="space-y-12">
            {onboardingSteps.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={`order-2 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      Step {step.step} Visual
                    </span>
                  </div>
                </div>
                <div
                  className={`order-1 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{step.icon}</div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        STEP {step.step}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Session Demo Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Mock session demo
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-8">
              <span className="text-gray-500 text-lg">
                Mock Session Video/Interactive Demo
              </span>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience what a typical coaching session looks like with our
                interactive demo. See how our coaches work with clients to
                improve communication skills and build confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-session" className="btn-primary">
                  Try a Free Session
                </Link>
                <Link to="/tutors" className="btn-secondary">
                  Meet Our Coaches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Student Coach Matching Works Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How student coach matching works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Matching Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Comprehensive Assessment
                    </h4>
                    <p className="text-gray-600">
                      We evaluate your communication style, goals, and learning
                      preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Expert Analysis
                    </h4>
                    <p className="text-gray-600">
                      Our team analyzes your profile to identify the best coach
                      match.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Perfect Match
                    </h4>
                    <p className="text-gray-600">
                      We introduce you to your ideal coach based on expertise
                      and compatibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-gray-600 mb-6">
                  Our matching algorithm considers factors like communication
                  style, industry experience, coaching approach, and personality
                  compatibility to ensure the best possible learning experience.
                </p>
                <Link to="/tutors" className="btn-primary">
                  Meet Our Coaches
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Matching Process Visual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Learn Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to learn?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Now that you understand how our process works, take the first step
            towards transforming your communication skills with expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-session" className="btn-primary">
              Book a Call
            </Link>
            <Link to="/tutors" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
