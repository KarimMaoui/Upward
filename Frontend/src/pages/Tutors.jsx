import { useEffect, useState } from "react"; // 1. On importe useState
import { Link } from "react-router-dom";
import { tutors } from "../data/tutors";

const Tutors = () => {
  // État pour savoir quel tuteur est sélectionné (pour le pop-up)
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedTutor(null);
  };

  return (
    <div className="relative">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image du tuteur */}
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Contenu de la carte (Sans la bio) */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tutor.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{tutor.role}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {tutor.specialty}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="text-gray-900 font-medium">
                        {tutor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Boutons */}
                  <div className="mt-auto flex gap-3">
                    <button
                      onClick={() => setSelectedTutor(tutor)}
                      className="flex-1 btn-secondary text-center py-2 cursor-pointer"
                    >
                      View Profile
                    </button>
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

      {/* MODAL / POP-UP SECTION */}
      {selectedTutor && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeModal} // Ferme si on clique en dehors
        >
          {/* Contenu du Modal */}
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique DANS le modal
          >
            {/* Bouton Fermer (Croix) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Latérale (Mobile: Top, Desktop: Left) */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedTutor.image} 
                  alt={selectedTutor.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Informations Détaillées */}
              <div className="w-full md:w-3/5 p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">{selectedTutor.name}</h2>
                  <p className="text-lg text-blue-600 font-medium">{selectedTutor.role}</p>
                </div>

                <div className="space-y-4 mb-8 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="font-semibold text-gray-700 block mb-1">Specialties</span>
                    <span className="text-gray-600">{selectedTutor.specialty}</span>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Experience</span>
                    <span className="text-gray-900 font-medium">{selectedTutor.experience}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Biography</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedTutor.bio}
                  </p>
                </div>

                <div className="flex justify-end">
                  <Link
                    to={`/book-session?tutor=${selectedTutor.id}`}
                    className="btn-primary w-full md:w-auto text-center"
                  >
                    Book a Session with {selectedTutor.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutors;
