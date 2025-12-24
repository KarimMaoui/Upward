import { Link } from "react-router-dom";
import { tutors } from "../data/tutors";

const Tutors = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet our consultants
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our expert consultants are industry professionals with proven track
            records in communication, leadership, and professional development.
          </p>
          <Link to="/book-session" className="btn-primary">
            Book a Session
          </Link>
        </div>
      </section>

      {/* Our Tutors Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {tutors.map((tutor) => (
              // <div
              //   key={tutor.id}
              //   className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              // >
              <div
                key={tutor.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* <div className="bg-gray-200 mx-auto h-auto flex items-center justify-center">
                  <img
                    src={tutor.image}
                    className="mx-auto h-auto object-cover"
                  />
                </div> */}
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* <div className="p-6"> */}
                <div className="flex-1 p-6 flex flex-col">
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
                      {/* <span className="text-gray-600">Rating:</span>
                      <span className="text-gray-900 font-medium">
                        ⭐ {tutor.rating}
                      </span> */}
                    </div>
                    <div className="flex text-sm">
                      <span className="text-gray-600 mr-2 shrink-0">Bio: </span>
                      <span className="text-gray-900 font-medium flex-1 min-w-0 truncate">
                        {tutor.bio}
                      </span>
                    </div>
                  </div>

                  {/* <div className="flex gap-2"> */}
                  <div className="mt-auto flex gap-3">
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
              Each of our consultants brings unique expertise and experience to
              help you achieve your communication goals. Browse their profiles
              to find the perfect match for your needs.
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
            Why Choose Our Consultants?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">
                <img
                  src="/expert.png"
                  alt="expert"
                  className="w-16 h-16 inline-block"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Qualifications
              </h3>
              <p className="text-gray-600">
                All our consultants hold advanced degrees and certifications in
                communication, leadership, and coaching methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">
                <img
                  src="/travel-bag.png"
                  alt="travel"
                  className="w-16 h-16 inline-block"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Experience
              </h3>
              <p className="text-gray-600">
                Years of real-world experience in corporate environments, media,
                and executive leadership roles.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">
                <img
                  src="/graph.png"
                  alt="graph"
                  className="w-16 h-16 inline-block"
                />
              </div>
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
