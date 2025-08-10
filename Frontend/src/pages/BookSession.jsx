// import { useState } from "react";
// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";

// const BookSession = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     coach: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Booking submitted:", formData);
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       coach: "",
//       date: "",
//       time: "",
//       message: "",
//     });
//   };

//   const services = [
//     "Individual Coaching Session",
//     "Team Training Workshop",
//     "Public Speaking Course",
//     "Leadership Communication",
//     "Interview Preparation",
//     "Custom Package",
//   ];

//   const coaches = [
//     "Any Tutor (We will match you)",
//     "Tutor 1 - Communication Expert",
//     "Tutor 2 - Leadership Coach",
//     "Tutor 3 - Career Coach",
//     "Tutor 4 - Sales Communication",
//     "Tutor 5 - Media & PR Coach",
//     "Tutor 6 - Technical Communication",
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
//         <div className="container-max text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Book a Session
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Ready to transform your communication skills? Book a session with
//             one of our expert coaches and take the first step towards speaking
//             better and reaching higher.
//           </p>
//         </div>
//       </section>

//       {/* Booking Form Section */}
//       <section className="section-padding bg-white">
//         <div className="container-max max-w-4xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                 Schedule Your Session
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Fill out the form to book your coaching session. We will contact
//                 you within 24 hours to confirm your appointment and provide
//                 additional details.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
//                     1
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">
//                       Complete the Form
//                     </h3>
//                     <p className="text-gray-600">
//                       Provide your details and preferences
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
//                     2
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">
//                       We'll Contact You
//                     </h3>
//                     <p className="text-gray-600">
//                       Confirmation and session details
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
//                     3
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">
//                       Start Your Journey
//                     </h3>
//                     <p className="text-gray-600">Begin your transformation</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   placeholder="+1 (555) 123-4567"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="service"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Service Type *
//                 </label>
//                 <select
//                   id="service"
//                   name="service"
//                   value={formData.service}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                 >
//                   <option value="">Select a service</option>
//                   {services.map((service, index) => (
//                     <option key={index} value={service}>
//                       {service}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label
//                   htmlFor="coach"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Preferred Coach
//                 </label>
//                 <select
//                   id="coach"
//                   name="coach"
//                   value={formData.coach}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                 >
//                   <option value="">Select a coach (optional)</option>
//                   {coaches.map((coach, index) => (
//                     <option key={index} value={coach}>
//                       {coach}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="date"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Preferred Date
//                   </label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="time"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Preferred Time
//                   </label>
//                   <input
//                     type="time"
//                     id="time"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Additional Information
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   placeholder="Tell us about your goals, specific challenges, or any other information..."
//                 />
//               </div>

//               <button type="submit" className="btn-primary w-full">
//                 Book Session
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-max text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help?</h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             If you have questions or need assistance with booking, our team is
//             here to help.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/about#contact" className="btn-secondary">
//               Contact Us
//             </Link>
//             <Link to="/how-it-works" className="btn-primary">
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BookSession;

// src/pages/BookSession.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const BookSession = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    coach: "",
    date: "",
    time: "",
    message: "",
    honey: "", // spam honeypot (should stay empty)
  });

  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const services = [
    "Individual Coaching Session",
    "Team Training Workshop",
    "Public Speaking Course",
    "Leadership Communication",
    "Interview Preparation",
    "Custom Package",
  ];

  const coaches = [
    "Any Tutor (We will match you)",
    "Tutor 1 - Communication Expert",
    "Tutor 2 - Leadership Coach",
    "Tutor 3 - Career Coach",
    "Tutor 4 - Sales Communication",
    "Tutor 5 - Media & PR Coach",
    "Tutor 6 - Technical Communication",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMsg("");

    // honeypot: if filled, silently ignore
    if (formData.honey) return;

    setSending(true);
    try {
      // these keys must exist in your EmailJS template
      const params = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        coach: formData.coach,
        date: formData.date,
        time: formData.time,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setResultMsg(
        "✅ Thanks! Your booking request was sent. We’ll contact you within 24 hours."
      );

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        coach: "",
        date: "",
        time: "",
        message: "",
        honey: "",
      });
    } catch (err) {
      console.error(err);
      setResultMsg(
        "❌ Sorry, something went wrong. Please try again or email us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Book a Session
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your communication skills? Book a session with
            one of our expert coaches and take the first step toward speaking
            better and reaching higher.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule Your Session
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form to book your coaching session. We’ll contact
                you within 24 hours to confirm your appointment and provide
                additional details.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Complete the Form",
                    desc: "Provide your details and preferences",
                  },
                  {
                    step: 2,
                    title: "We’ll Contact You",
                    desc: "Confirmation and session details",
                  },
                  {
                    step: 3,
                    title: "Start Your Journey",
                    desc: "Begin your transformation",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-center">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* hidden honeypot */}
              <input
                type="text"
                name="honey"
                value={formData.honey}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Coach */}
              <div>
                <label
                  htmlFor="coach"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Coach
                </label>
                <select
                  id="coach"
                  name="coach"
                  value={formData.coach}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select a coach (optional)</option>
                  {coaches.map((coach, index) => (
                    <option key={index} value={coach}>
                      {coach}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date / Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about your goals, specific challenges, or any other information..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full disabled:opacity-60"
                disabled={sending}
              >
                {sending ? "Sending..." : "Book Session"}
              </button>

              {resultMsg && (
                <p className="text-sm mt-2 text-center">{resultMsg}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have questions or need assistance with booking, our team is
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about#contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/how-it-works" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookSession;
