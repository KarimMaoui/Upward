import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Upward
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are passionate about helping professionals develop exceptional
            communication skills that drive success in their careers and
            personal lives.
          </p>
          <div className="mt-12">
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">About Upward Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded with a vision to transform how professionals
                  communicate, Upward has become a leading platform for
                  communication coaching and skill development.
                </p>
                <p>
                  Our mission is to empower individuals with the confidence and
                  skills they need to speak effectively, lead with impact, and
                  achieve their full potential.
                </p>
                <p>
                  Through personalized coaching, expert guidance, and proven
                  methodologies, we help our clients overcome communication
                  challenges and unlock new opportunities.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Our Story Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in our coaching methods and
                client outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personalization
              </h3>
              <p className="text-gray-600">
                Every coaching experience is tailored to individual needs and
                goals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Growth
              </h3>
              <p className="text-gray-600">
                We believe in continuous improvement and helping clients reach
                their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Contact us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to learn more about
                how we can help you improve your communication skills? We would
                love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">info@upward.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
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

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CSV Link Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">CSV link</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Download our comprehensive guide to communication best practices and
            coaching insights.
          </p>
          <button className="btn-primary">Link</button>
        </div>
      </section>
    </div>
  );
};

export default About;
