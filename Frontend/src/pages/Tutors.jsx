import { Link } from "react-router-dom";

const Tutors = () => {
  // use mock data now, can be replaced later
  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Communication Expert",
      specialty: "Public Speaking & Presentation Skills",
      experience: "15+ years",
      rating: 4.9,
      sessions: 500,
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Leadership Coach",
      specialty: "Executive Communication & Team Leadership",
      experience: "12+ years",
      rating: 4.8,
      sessions: 450,
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Career Coach",
      specialty: "Interview Preparation & Professional Development",
      experience: "10+ years",
      rating: 4.9,
      sessions: 380,
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Sales Communication Specialist",
      specialty: "Sales Presentations & Negotiation Skills",
      experience: "18+ years",
      rating: 4.7,
      sessions: 600,
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "Lisa Johnson",
      role: "Media & PR Coach",
      specialty: "Media Training & Crisis Communication",
      experience: "14+ years",
      rating: 4.8,
      sessions: 420,
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Technical Communication Expert",
      specialty: "Technical Presentations & Complex Communication",
      experience: "16+ years",
      rating: 4.9,
      sessions: 480,
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet our tutors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our expert coaches are industry professionals with proven track
            records in communication, leadership, and professional development.
          </p>
          <Link to="/book-session" className="btn-primary">
            Book a Session
          </Link>
          <div className="mt-12">
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Tutors Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tutors Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Tutors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Tutor {tutor.id}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tutor.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{tutor.role}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {tutor.specialty}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="text-gray-900 font-medium">
                        {tutor.experience}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <span className="text-gray-900 font-medium">
                        ⭐ {tutor.rating}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sessions:</span>
                      <span className="text-gray-900 font-medium">
                        {tutor.sessions}+
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/tutors/${tutor.id}`}
                      className="flex-1 btn-secondary text-center py-2"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/book-session?tutor=${tutor.id}`}
                      className="flex-1 btn-primary text-center py-2"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Each of our coaches brings unique expertise and experience to help
              you achieve your communication goals. Browse their profiles to
              find the perfect match for your needs.
            </p>
            <Link to="/book-session" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaches Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Coaches?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Qualifications
              </h3>
              <p className="text-gray-600">
                All our coaches hold advanced degrees and certifications in
                communication, leadership, and coaching methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Experience
              </h3>
              <p className="text-gray-600">
                Years of real-world experience in corporate environments, media,
                and executive leadership roles.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Track record of helping thousands of professionals improve their
                communication skills and advance their careers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
